from playwright.sync_api import sync_playwright
import json

URL = "http://localhost:3000/treatments/orthopedic-injections"
SCREENSHOT_PATH = r"C:\Users\Bilal\appflows\ortho\advancedorthopedics\screenshots\injection_figure_v3.png"

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={"width": 1920, "height": 1080})
        page.goto(URL, wait_until="domcontentloaded", timeout=60000)
        page.wait_for_timeout(3000)

        # Scroll so the figure is fully visible in viewport
        page.evaluate("""
            () => {
                const headings = Array.from(document.querySelectorAll('h2, h3, h4'));
                const target = headings.find(h => h.textContent.includes('Interactive Injection Relief Map'));
                if (target) target.scrollIntoView({ behavior: 'instant', block: 'start' });
            }
        """)
        page.wait_for_timeout(800)

        # Get the anatomy figure image rect
        img_rect = page.evaluate("""
            () => {
                const img = Array.from(document.querySelectorAll('img')).find(
                    i => i.alt && i.alt.includes('Human anatomy figure')
                );
                if (!img) return null;
                const r = img.getBoundingClientRect();
                return { left: r.left, top: r.top, right: r.right, bottom: r.bottom, width: r.width, height: r.height };
            }
        """)
        print("Image rect:", json.dumps(img_rect, indent=2))

        # Get all 7 hotspot dot buttons (aria='Select ...')
        hotspot_data = page.evaluate("""
            () => {
                const btns = Array.from(document.querySelectorAll('button[aria-label^="Select "]'));
                return btns.map(btn => {
                    const r = btn.getBoundingClientRect();
                    const label = btn.getAttribute('aria-label').replace('Select ', '');
                    return {
                        label,
                        left: r.left, top: r.top,
                        width: r.width, height: r.height,
                        centerX: r.left + r.width / 2,
                        centerY: r.top + r.height / 2,
                    };
                });
            }
        """)
        print(f"\nFound {len(hotspot_data)} hotspot buttons")

        # Screenshot: clip to the figure image region with a small padding
        padding = 15
        clip = {
            "x": max(0, img_rect["left"] - padding),
            "y": max(0, img_rect["top"] - padding),
            "width": img_rect["width"] + padding * 2,
            "height": img_rect["height"] + padding * 2,
        }
        page.screenshot(path=SCREENSHOT_PATH, clip=clip)
        print(f"\nScreenshot saved: {SCREENSHOT_PATH}")
        print(f"Clip used: x={clip['x']:.0f} y={clip['y']:.0f} w={clip['width']:.0f} h={clip['height']:.0f}")

        # Compute relative positions
        print("\n" + "="*85)
        print(f"{'Body Part':<22} {'dot_x (px)':>12} {'dot_y (px)':>12} {'x%':>8} {'y%':>8}")
        print("="*85)
        results = []
        for h in hotspot_data:
            dot_x = h["centerX"] - img_rect["left"]
            dot_y = h["centerY"] - img_rect["top"]
            x_pct = dot_x / img_rect["width"] * 100
            y_pct = dot_y / img_rect["height"] * 100
            results.append({
                "label": h["label"],
                "dot_x": dot_x,
                "dot_y": dot_y,
                "x_pct": x_pct,
                "y_pct": y_pct,
            })
            print(f"{h['label']:<22} {dot_x:>12.1f} {dot_y:>12.1f} {x_pct:>7.1f}% {y_pct:>7.1f}%")
        print("="*85)
        print(f"\nImage dimensions: {img_rect['width']:.0f}px wide x {img_rect['height']:.0f}px tall")

        browser.close()
        return results

if __name__ == "__main__":
    run()
