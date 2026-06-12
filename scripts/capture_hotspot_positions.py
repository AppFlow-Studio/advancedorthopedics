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

        # Scroll anatomy figure into view
        anatomy_img = page.query_selector('img[alt*="anatomy"]')
        anatomy_img.scroll_into_view_if_needed()
        time.sleep(1.5)

        img_box = anatomy_img.bounding_box()
        print(f"Image box (viewport): x={img_box['x']}, y={img_box['y']}, w={img_box['width']}, h={img_box['height']}")

        # Get all hotspot buttons with their aria-labels and positions
        hotspot_info = page.evaluate("""
            () => {
                const img = document.querySelector('img[alt*="anatomy"]');
                const imgRect = img.getBoundingClientRect();
                const container = img.parentElement;
                const buttons = Array.from(container.querySelectorAll('button[aria-label]'));
                return buttons.map(btn => {
                    const r = btn.getBoundingClientRect();
                    const centerX = r.left + r.width / 2;
                    const centerY = r.top + r.height / 2;
                    // Relative to image top-left
                    const relX = centerX - imgRect.left;
                    const relY = centerY - imgRect.top;
                    // As percentage of image size
                    const pctX = relX / imgRect.width;
                    const pctY = relY / imgRect.height;
                    return {
                        label: btn.getAttribute('aria-label'),
                        style: btn.getAttribute('style'),
                        viewport_center_x: Math.round(centerX * 10) / 10,
                        viewport_center_y: Math.round(centerY * 10) / 10,
                        rel_to_image_x: Math.round(relX * 10) / 10,
                        rel_to_image_y: Math.round(relY * 10) / 10,
                        pct_x: Math.round(pctX * 1000) / 1000,
                        pct_y: Math.round(pctY * 1000) / 1000,
                    };
                });
            }
        """)

        print(f"\n{'='*70}")
        print(f"IMAGE: x={img_box['x']}, y={img_box['y']}, width={img_box['width']}, height={img_box['height']}")
        print(f"{'='*70}")
        print(f"\nHotspot Buttons with Exact Positions:")
        print(f"{'Label':<25} {'Style':<20} {'VPcenter(x,y)':<20} {'RelToImg(x,y)':<20} {'Pct(x,y)'}")
        print("-"*100)
        for h in hotspot_info:
            print(f"{h['label']:<25} {str(h['style']):<20} ({h['viewport_center_x']},{h['viewport_center_y']})         ({h['rel_to_image_x']},{h['rel_to_image_y']})         ({h['pct_x']},{h['pct_y']})")

        # Take the figure panel screenshot
        pad = 30
        clip = {
            'x': max(0, img_box['x'] - pad),
            'y': max(0, img_box['y'] - pad),
            'width': img_box['width'] + pad * 2,
            'height': img_box['height'] + pad * 2,
        }
        page.screenshot(path=f"{OUT_DIR}/injection_figure_final.png", clip=clip)
        print(f"\nSaved: injection_figure_final.png  (clip: {clip})")
        print(f"NOTE: To convert viewport coords to clip coords, subtract clip offset:")
        print(f"  clip_x = viewport_x - {clip['x']}")
        print(f"  clip_y = viewport_y - {clip['y']}")
        print()
        for h in hotspot_info:
            cx = h['viewport_center_x'] - clip['x']
            cy = h['viewport_center_y'] - clip['y']
            print(f"  {h['label']:<25} in cropped image: ({cx:.1f}, {cy:.1f})")

        # Also take a wider screenshot that includes the full section with the body
        # Scroll to show the full map including the sidebar list
        section_el_handle = page.evaluate_handle("""
            () => {
                const headings = Array.from(document.querySelectorAll('h2'));
                for (const h of headings) {
                    if (h.textContent.includes('Interactive Injection Relief Map')) {
                        return h.closest('section') || h.parentElement?.parentElement;
                    }
                }
                return null;
            }
        """)
        section_el = section_el_handle.as_element()
        if section_el:
            section_el.scroll_into_view_if_needed()
            time.sleep(1)
            page.screenshot(path=f"{OUT_DIR}/injection_section_wide.png", full_page=False)
            print("Saved: injection_section_wide.png")

        browser.close()
        print("\nDone.")

if __name__ == "__main__":
    capture()
