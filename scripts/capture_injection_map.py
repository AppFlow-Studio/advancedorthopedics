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

        # 1. Above the fold
        page.screenshot(path=f"{OUT_DIR}/injection_above_fold.png", full_page=False)
        print("Saved: injection_above_fold.png")

        # 2. Full page screenshot
        page.screenshot(path=f"{OUT_DIR}/injection_fullpage.png", full_page=True)
        print("Saved: injection_fullpage.png")

        # 3. Print all headings with Y positions to locate the map section
        headings = page.query_selector_all('h1, h2, h3, h4')
        print(f"\nAll headings ({len(headings)} total):")
        section_y = None
        for h in headings:
            text = h.inner_text().strip()
            box = h.bounding_box()
            if box:
                tag = h.evaluate('el => el.tagName')
                print(f"  {tag}  y={box['y']:.0f}  text={text!r}")
                if 'injection relief map' in text.lower() or 'interactive' in text.lower():
                    section_y = box['y']
                    print(f"    ^^^ TARGET SECTION FOUND at y={section_y:.0f}")

        # 4. Try scrolling to find the section heading
        section = page.query_selector('text=/Interactive Injection Relief Map/i')
        if not section:
            # Try alternate selectors
            for sel in ['[id*="injection"]', '[id*="relief"]', '[id*="map"]', '[class*="relief"]', '[class*="anatomy"]']:
                section = page.query_selector(sel)
                if section:
                    print(f"Found section via selector: {sel}")
                    break

        if section:
            section.scroll_into_view_if_needed()
            time.sleep(1.5)
            page.screenshot(path=f"{OUT_DIR}/injection_map_section.png", full_page=False)
            print("Saved: injection_map_section.png")
            box = section.bounding_box()
            print(f"Section element box: {box}")
        else:
            # Use known y offset if found in headings
            if section_y is not None:
                page.evaluate(f"window.scrollTo(0, {max(0, section_y - 80)})")
                time.sleep(1.5)
                page.screenshot(path=f"{OUT_DIR}/injection_map_section.png", full_page=False)
                print("Saved: injection_map_section.png (via y-scroll)")
            else:
                print("WARNING: Section not found by any method")

        # 5. Inspect all images
        images = page.query_selector_all('img')
        print(f"\nAll images on page ({len(images)} total):")
        anatomy_img = None
        for img in images:
            src = img.get_attribute('src') or ''
            alt = img.get_attribute('alt') or ''
            box = img.bounding_box()
            if box:
                print(f"  src={src[:80]!r}  alt={alt!r}  box={box}")
                # Pick the largest / most likely anatomy figure
                if anatomy_img is None or (box['width'] * box['height'] > anatomy_img[1]['width'] * anatomy_img[1]['height']):
                    if any(kw in src.lower() or kw in alt.lower() for kw in ['body', 'anatomy', 'figure', 'human', 'person', 'inject', 'relief']):
                        anatomy_img = (img, box)

        # 6. Try to screenshot just the figure panel (center column of the relief map)
        # Look for the image or container near the section
        figure_candidates = [
            'img[alt*="body"]',
            'img[alt*="anatomy"]',
            'img[alt*="figure"]',
            'img[alt*="human"]',
            'img[src*="body"]',
            'img[src*="anatomy"]',
            'img[src*="figure"]',
            '[class*="figure"]',
            '[class*="anatomy"]',
            '[class*="body"]',
        ]
        figure_el = None
        for sel in figure_candidates:
            el = page.query_selector(sel)
            if el:
                box = el.bounding_box()
                if box and box['width'] > 50:
                    figure_el = (el, box, sel)
                    print(f"\nFigure element found via '{sel}': {box}")
                    break

        # 7. If we found a figure, screenshot it clipped
        if figure_el:
            el, box, sel = figure_el
            el.scroll_into_view_if_needed()
            time.sleep(1)
            # Add padding around it
            pad = 20
            clip = {
                'x': max(0, box['x'] - pad),
                'y': max(0, box['y'] - pad),
                'width': box['width'] + pad * 2,
                'height': box['height'] + pad * 2,
            }
            page.screenshot(path=f"{OUT_DIR}/injection_figure_closeup.png", clip=clip)
            print(f"Saved: injection_figure_closeup.png  clip={clip}")
        else:
            print("\nFigure element not found via specific selectors — will do a DOM dump")

        # 8. Dump the HTML of the page section for debugging
        html_snippet = page.evaluate("""
            () => {
                const headings = Array.from(document.querySelectorAll('h2, h3'));
                for (const h of headings) {
                    if (h.textContent.toLowerCase().includes('injection relief') || h.textContent.toLowerCase().includes('interactive')) {
                        // Get parent section container
                        let el = h;
                        for (let i = 0; i < 5; i++) {
                            el = el.parentElement;
                            if (!el) break;
                        }
                        return el ? el.outerHTML.substring(0, 3000) : h.outerHTML;
                    }
                }
                return 'Section not found in DOM';
            }
        """)
        print(f"\nDOM snippet around section:\n{html_snippet[:3000]}")

        browser.close()
        print("\nDone.")

if __name__ == "__main__":
    capture()
