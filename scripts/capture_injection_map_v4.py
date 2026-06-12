from playwright.sync_api import sync_playwright
import time

URL = "http://localhost:3000/treatments/orthopedic-injections"
FULL_PATH = "C:/Users/Bilal/appflows/ortho/advancedorthopedics/screenshots/injection_map_v4_full.png"
FIGURE_PATH = "C:/Users/Bilal/appflows/ortho/advancedorthopedics/screenshots/injection_figure_v4.png"

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={"width": 1920, "height": 1080})

    # Use "commit" (earliest signal) then sleep to let JS render
    page.goto(URL, wait_until="commit", timeout=90000)
    print("Navigation committed, waiting for render...")
    time.sleep(8)

    # Dismiss the "Find Your Nearest Clinic" modal if present
    dismissed = False
    for selector in [
        'button:has-text("No Thanks")',
        'button:has-text("No thanks")',
        'button:has-text("no thanks")',
    ]:
        try:
            btn = page.locator(selector).first
            if btn.is_visible(timeout=2000):
                btn.click()
                print(f"Dismissed modal via: {selector}")
                dismissed = True
                time.sleep(1)
                break
        except Exception:
            pass

    if not dismissed:
        page.keyboard.press("Escape")
        print("Pressed Escape to dismiss modal")
        time.sleep(1)

    # Force-hide any modal/dialog overlay via JS
    page.evaluate("""
        () => {
            document.querySelectorAll('[role="dialog"]').forEach(el => el.style.display = 'none');
            // Also look for fixed/absolute divs with high z-index covering the center
            Array.from(document.querySelectorAll('*')).forEach(el => {
                const s = window.getComputedStyle(el);
                const z = parseInt(s.zIndex) || 0;
                if ((s.position === 'fixed') && z > 20 && el.offsetWidth > 150 && el.offsetHeight > 150) {
                    el.style.display = 'none';
                }
            });
        }
    """)
    time.sleep(1)

    # Scroll to the Interactive Injection Relief Map section
    scrolled = page.evaluate("""
        () => {
            const headings = Array.from(document.querySelectorAll('h2, h3, h4, h1'));
            const target = headings.find(h => h.textContent.includes('Interactive Injection Relief Map'));
            if (target) {
                target.scrollIntoView({ behavior: 'instant', block: 'start' });
                return target.textContent.trim();
            }
            return null;
        }
    """)
    print(f"Scrolled to heading: {scrolled}")
    time.sleep(2)

    # --- Full section screenshot (all 3 columns) ---
    section_box = page.evaluate("""
        () => {
            const headings = Array.from(document.querySelectorAll('h2, h3, h4, h1'));
            const heading = headings.find(h => h.textContent.includes('Interactive Injection Relief Map'));
            if (!heading) return null;
            let el = heading;
            for (let i = 0; i < 12; i++) {
                el = el.parentElement;
                if (!el) break;
                const rect = el.getBoundingClientRect();
                if (rect.width > 1200 && rect.height > 400) {
                    return { x: rect.x, y: rect.y, width: rect.width, height: rect.height };
                }
            }
            // Fallback
            el = heading;
            for (let i = 0; i < 12; i++) {
                el = el.parentElement;
                if (!el) break;
                const rect = el.getBoundingClientRect();
                if (rect.width > 600 && rect.height > 300) {
                    return { x: rect.x, y: rect.y, width: rect.width, height: rect.height };
                }
            }
            return null;
        }
    """)

    print(f"Section box: {section_box}")

    if section_box:
        clip = {
            "x": max(0, section_box["x"]),
            "y": max(0, section_box["y"]),
            "width": min(section_box["width"], 1920 - max(0, section_box["x"])),
            "height": min(section_box["height"], 1080 - max(0, section_box["y"]))
        }
        page.screenshot(path=FULL_PATH, clip=clip)
        print(f"Full section screenshot saved: {FULL_PATH}")
    else:
        page.screenshot(path=FULL_PATH)
        print(f"Full section (viewport fallback) saved: {FULL_PATH}")

    # --- Close-up of center figure panel only ---
    figure_box = page.evaluate("""
        () => {
            const imgs = Array.from(document.querySelectorAll('img'));
            // Find the anatomy/body figure image
            const fig = imgs.find(img => {
                const src = img.src || '';
                const alt = (img.alt || '').toLowerCase();
                return src.includes('mountainspineortho') || src.includes('body') || src.includes('anatomy')
                    || alt.includes('anatomy') || alt.includes('injection') || alt.includes('human') || alt.includes('body');
            });
            if (fig) {
                let el = fig;
                for (let i = 0; i < 6; i++) {
                    el = el.parentElement;
                    if (!el) break;
                    const style = window.getComputedStyle(el);
                    if (style.position === 'relative') {
                        const pr = el.getBoundingClientRect();
                        if (pr.width > 100 && pr.height > 200) {
                            return { x: pr.x, y: pr.y, width: pr.width, height: pr.height, source: 'relative-parent' };
                        }
                    }
                }
                const rect = fig.getBoundingClientRect();
                return { x: rect.x, y: rect.y, width: rect.width, height: rect.height, source: 'img-direct' };
            }
            return null;
        }
    """)

    print(f"Figure box: {figure_box}")

    if figure_box and figure_box["width"] > 50:
        pad = 24
        clip = {
            "x": max(0, figure_box["x"] - pad),
            "y": max(0, figure_box["y"] - pad),
            "width": min(figure_box["width"] + pad * 2, 1920),
            "height": min(figure_box["height"] + pad * 2, 1080)
        }
        page.screenshot(path=FIGURE_PATH, clip=clip)
        print(f"Figure close-up saved: {FIGURE_PATH}")
    else:
        page.screenshot(path=FIGURE_PATH)
        print(f"Figure close-up (viewport fallback) saved: {FIGURE_PATH}")

    # --- Print dot positions for analysis ---
    dot_data = page.evaluate("""
        () => {
            const buttons = Array.from(document.querySelectorAll('button'));
            return buttons
                .filter(b => {
                    const r = b.getBoundingClientRect();
                    return r.width <= 60 && r.height <= 60 && r.width >= 8 && r.y > 50;
                })
                .map(b => {
                    const rect = b.getBoundingClientRect();
                    return {
                        text: b.textContent.trim().substring(0, 60),
                        cx: Math.round(rect.x + rect.width / 2),
                        cy: Math.round(rect.y + rect.height / 2),
                        width: Math.round(rect.width),
                        height: Math.round(rect.height),
                        ariaLabel: b.getAttribute('aria-label') || ''
                    };
                });
        }
    """)
    print(f"\nFound {len(dot_data)} dots/buttons:")
    for d in dot_data:
        label = d['ariaLabel'] or d['text'] or '(no label)'
        print(f"  [{label[:50]}] center=({d['cx']},{d['cy']}) size={d['width']}x{d['height']}")

    browser.close()
    print("\nDone.")
