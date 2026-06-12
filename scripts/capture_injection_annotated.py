from playwright.sync_api import sync_playwright
import time

BASE_URL = "http://localhost:3000/treatments/orthopedic-injections"
OUT_DIR = "C:/Users/Bilal/appflows/ortho/advancedorthopedics/screenshots"

def capture():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={'width': 1920, 'height': 1080})
        page.goto(BASE_URL, wait_until='domcontentloaded', timeout=60000)
        time.sleep(3)

        # ----------------------------------------------------------------
        # 1. Find the anatomy figure image precisely
        # ----------------------------------------------------------------
        anatomy_img = page.query_selector('img[alt*="anatomy"]')
        if not anatomy_img:
            print("ERROR: anatomy image not found")
            return

        img_box = anatomy_img.bounding_box()
        print(f"Anatomy image box (page coords): {img_box}")
        # img_box keys: x, y, width, height  (page-level coords)

        # ----------------------------------------------------------------
        # 2. Scroll so the figure is fully visible in viewport
        # ----------------------------------------------------------------
        anatomy_img.scroll_into_view_if_needed()
        time.sleep(1.5)

        # Get viewport-relative position after scroll
        viewport_box = anatomy_img.bounding_box()
        print(f"Anatomy image box (after scroll): {viewport_box}")

        # ----------------------------------------------------------------
        # 3. Screenshot of the full Interactive map section
        #    (find the parent section)
        # ----------------------------------------------------------------
        section_heading = page.query_selector('text=/Interactive Injection Relief Map/i')
        if section_heading:
            # Walk up to find the section container
            container = page.evaluate_handle("""
                () => {
                    const headings = Array.from(document.querySelectorAll('h2'));
                    for (const h of headings) {
                        if (h.textContent.includes('Interactive Injection Relief Map')) {
                            // Go up 3 levels to get the section wrapper
                            let el = h.parentElement?.parentElement?.parentElement;
                            return el || h.parentElement;
                        }
                    }
                    return null;
                }
            """)
            section_el = container.as_element()
            if section_el:
                sec_box = section_el.bounding_box()
                print(f"Section container box: {sec_box}")
                if sec_box:
                    # Clip to show the whole section
                    page.screenshot(
                        path=f"{OUT_DIR}/injection_map_fullsection.png",
                        clip={
                            'x': 0,
                            'y': max(0, sec_box['y']),
                            'width': 1920,
                            'height': min(sec_box['height'], 1080),
                        }
                    )
                    print("Saved: injection_map_fullsection.png")

        # ----------------------------------------------------------------
        # 4. Viewport screenshot focused on the figure
        # ----------------------------------------------------------------
        page.screenshot(path=f"{OUT_DIR}/injection_map_viewport.png", full_page=False)
        print("Saved: injection_map_viewport.png")

        # ----------------------------------------------------------------
        # 5. Wider close-up of just the figure (300px wide crop)
        # ----------------------------------------------------------------
        vb = viewport_box
        pad = 30
        clip = {
            'x': max(0, vb['x'] - pad),
            'y': max(0, vb['y'] - pad),
            'width': vb['width'] + pad * 2,
            'height': vb['height'] + pad * 2,
        }
        page.screenshot(path=f"{OUT_DIR}/injection_figure_panel.png", clip=clip)
        print(f"Saved: injection_figure_panel.png  clip={clip}")

        # ----------------------------------------------------------------
        # 6. Inspect hotspot dots — look for button/div elements
        #    overlaid on the figure (likely positioned absolutely)
        # ----------------------------------------------------------------
        hotspot_data = page.evaluate("""
            () => {
                // Find the anatomy image
                const img = document.querySelector('img[alt*="anatomy"]');
                if (!img) return {error: 'no anatomy img'};

                const imgRect = img.getBoundingClientRect();

                // Look for sibling or nearby clickable hotspot elements
                const container = img.closest('[class*="relative"]') || img.parentElement;
                if (!container) return {error: 'no container', imgRect};

                const containerRect = container.getBoundingClientRect();

                // Find all child elements that might be hotspots
                const all = Array.from(container.querySelectorAll('*'));
                const hotspots = all.filter(el => {
                    const r = el.getBoundingClientRect();
                    // Must overlap with the image area
                    return r.width > 0 && r.height > 0 &&
                           r.left >= imgRect.left - 50 && r.right <= imgRect.right + 50 &&
                           r.top >= imgRect.top - 50 && r.bottom <= imgRect.bottom + 50 &&
                           el !== img;
                });

                return {
                    imgRect,
                    containerRect,
                    containerClass: container.className,
                    containerTag: container.tagName,
                    containerHTML: container.outerHTML.substring(0, 5000),
                    hotspots: hotspots.slice(0, 20).map(el => ({
                        tag: el.tagName,
                        class: el.className,
                        rect: el.getBoundingClientRect(),
                        text: el.textContent.substring(0, 50),
                        'data-body': el.dataset?.body || '',
                        'data-part': el.dataset?.part || '',
                    })),
                };
            }
        """)

        print(f"\nimgRect (viewport): {hotspot_data.get('imgRect')}")
        print(f"containerClass: {hotspot_data.get('containerClass', '')[:120]}")
        print(f"containerTag: {hotspot_data.get('containerTag')}")
        print(f"\nHotspot elements found: {len(hotspot_data.get('hotspots', []))}")
        for hs in hotspot_data.get('hotspots', []):
            print(f"  {hs['tag']}  class={hs['class'][:60]!r}  rect={hs['rect']}  text={hs['text']!r}  data-body={hs['data-body']!r}")

        # Container HTML
        ch = hotspot_data.get('containerHTML', '')
        print(f"\nContainer HTML (first 4000 chars):\n{ch[:4000]}")

        # ----------------------------------------------------------------
        # 7. Draw annotated overlay using Canvas to mark body parts
        # ----------------------------------------------------------------
        # Based on the image position, compute likely hotspot coords
        ir = hotspot_data.get('imgRect', {})
        if ir:
            ix, iy, iw, ih = ir['x'], ir['y'], ir['width'], ir['height']
            print(f"\nImage viewport coords: x={ix}, y={iy}, w={iw}, h={ih}")

            # These percentages are approximate based on a standing human figure
            # They'll be refined after seeing the actual image
            body_parts = {
                'neck':        (0.50, 0.12),  # center-top area
                'shoulder_L':  (0.25, 0.20),  # left shoulder (viewer's right)
                'shoulder_R':  (0.75, 0.20),  # right shoulder
                'back_spine':  (0.50, 0.38),  # mid-torso/spine
                'hip_L':       (0.35, 0.52),  # left hip
                'hip_R':       (0.65, 0.52),  # right hip
                'knee_L':      (0.35, 0.70),  # left knee
                'knee_R':      (0.65, 0.70),  # right knee
                'foot_L':      (0.35, 0.90),  # left ankle/foot
                'foot_R':      (0.65, 0.90),  # right ankle/foot
                'hand_L':      (0.15, 0.55),  # left hand/wrist
                'hand_R':      (0.85, 0.55),  # right hand/wrist
            }

            print("\nEstimated body part pixel positions (viewport coords):")
            for part, (px, py) in body_parts.items():
                vx = ix + iw * px
                vy = iy + ih * py
                print(f"  {part:15s}: viewport=({vx:.0f}, {vy:.0f})  %=({px:.2f}, {py:.2f})")

        browser.close()
        print("\nDone.")

if __name__ == "__main__":
    capture()
