"""
Final pass: capture the full 3-col section properly.
From DOM analysis:
  - The rounded card section: x=738, y=28, w=862, h=1081
  - This contains: heading + (left nav + center figure + right info panel) row
  - Figure: x=943, y=210, w=340, h=660
  - The full section needs to capture from x=738 to x=738+862=1600, y=18 to y=900

We need to scroll so the ENTIRE card is visible in one 1080px viewport.
The card height is 1081 — just over the viewport. We need to scroll to the top of the card.
"""
from playwright.sync_api import sync_playwright
import time

URL = "http://localhost:3000/treatments/orthopedic-injections"
SCREENSHOTS_DIR = "C:/Users/Bilal/appflows/ortho/advancedorthopedics/screenshots"


def capture():
    with sync_playwright() as p:
        browser = p.chromium.launch()

        # Use a 1600px wide viewport to better see the 3 cols, 1100px tall
        page = browser.new_page(viewport={"width": 1600, "height": 1100})
        page.goto(URL, wait_until="domcontentloaded", timeout=90000)
        try:
            page.wait_for_selector('img[alt*="anatomy"], img[alt*="injection treatment"]', state="visible", timeout=30000)
        except Exception as e:
            print(f"Wait: {e}")
        time.sleep(2)

        # Scroll the section heading to top of viewport
        page.evaluate("""
            () => {
                const heading = Array.from(document.querySelectorAll('h2,h3'))
                    .find(h => h.textContent.trim().includes('Interactive Injection Relief Map'));
                if (heading) heading.scrollIntoView({ behavior:'instant', block:'start' });
            }
        """)
        time.sleep(0.8)

        # Get the rounded card section bounds
        card = page.evaluate("""
            () => {
                const figImg = document.querySelector('img[alt*="anatomy"], img[alt*="injection treatment"]')
                            || Array.from(document.querySelectorAll('img')).find(i=>(i.src||'').includes('Injections-Interactive'));
                if (!figImg) return null;
                // Find the bg-[#F8F9FC] rounded card — walk up until we find it
                let el = figImg;
                while (el) {
                    const cls = el.className || '';
                    if (cls.includes('bg-[#F8F9FC]') || cls.includes('rounded-[24px]')) {
                        const r = el.getBoundingClientRect();
                        return { x:Math.round(r.x), y:Math.round(r.y), w:Math.round(r.width), h:Math.round(r.height), class:cls.slice(0,120) };
                    }
                    el = el.parentElement;
                }
                return null;
            }
        """)
        print("Card:", card)

        # Also find fig
        fig = page.evaluate("""
            () => {
                const img = document.querySelector('img[alt*="anatomy"], img[alt*="injection treatment"]')
                         || Array.from(document.querySelectorAll('img')).find(i=>(i.src||'').includes('Injections-Interactive'));
                if (!img) return null;
                const r = img.getBoundingClientRect();
                return { x:Math.round(r.x), y:Math.round(r.y), w:Math.round(r.width), h:Math.round(r.height) };
            }
        """)
        print("Fig:", fig)

        hotspots = page.evaluate("""
            () => {
                const results = [];
                document.querySelectorAll('button').forEach(btn => {
                    const lbl = btn.getAttribute('aria-label') || '';
                    if (lbl.startsWith('Select ')) {
                        const r = btn.getBoundingClientRect();
                        results.push({ label:lbl, cx:Math.round(r.x+r.width/2), cy:Math.round(r.y+r.height/2), x:Math.round(r.x), y:Math.round(r.y), w:Math.round(r.width), h:Math.round(r.height) });
                    }
                });
                return results;
            }
        """)
        print("Hotspots:", len(hotspots))
        for h in hotspots:
            print(" ", h)

        # ── Adjust scroll so card.y = 0 ───────────────────────────────────────
        if card and card["y"] != 0:
            page.evaluate(f"window.scrollBy(0, {card['y'] - 10})")
            time.sleep(0.6)
            card = page.evaluate("""
                () => {
                    const figImg = document.querySelector('img[alt*="anatomy"], img[alt*="injection treatment"]')
                                || Array.from(document.querySelectorAll('img')).find(i=>(i.src||'').includes('Injections-Interactive'));
                    if (!figImg) return null;
                    let el = figImg;
                    while (el) {
                        const cls = el.className || '';
                        if (cls.includes('bg-[#F8F9FC]') || cls.includes('rounded-[24px]')) {
                            const r = el.getBoundingClientRect();
                            return { x:Math.round(r.x), y:Math.round(r.y), w:Math.round(r.width), h:Math.round(r.height) };
                        }
                        el = el.parentElement;
                    }
                    return null;
                }
            """)
            fig = page.evaluate("""
                () => {
                    const img = document.querySelector('img[alt*="anatomy"], img[alt*="injection treatment"]')
                             || Array.from(document.querySelectorAll('img')).find(i=>(i.src||'').includes('Injections-Interactive'));
                    if (!img) return null;
                    const r = img.getBoundingClientRect();
                    return { x:Math.round(r.x), y:Math.round(r.y), w:Math.round(r.width), h:Math.round(r.height) };
                }
            """)
            hotspots = page.evaluate("""
                () => {
                    const results = [];
                    document.querySelectorAll('button').forEach(btn => {
                        const lbl = btn.getAttribute('aria-label') || '';
                        if (lbl.startsWith('Select ')) {
                            const r = btn.getBoundingClientRect();
                            results.push({ label:lbl, cx:Math.round(r.x+r.width/2), cy:Math.round(r.y+r.height/2) });
                        }
                    });
                    return results;
                }
            """)
            print("\nAfter scroll:")
            print("Card:", card)
            print("Fig:", fig)

        # ── Full-section screenshot (3-col layout) ─────────────────────────────
        if card and 0 <= card["y"] < 1100:
            cy = max(0, card["y"] - 5)
            ch = min(card["h"] + 10, 1100 - cy)
            cx = max(0, card["x"] - 5)
            cw = min(card["w"] + 10, 1600 - cx)
            page.screenshot(
                path=f"{SCREENSHOTS_DIR}/injection_map_v2_full.png",
                clip={"x": cx, "y": cy, "width": cw, "height": ch}
            )
            print(f"\nSaved injection_map_v2_full.png ({cx},{cy}) {cw}x{ch}")
        elif fig:
            cy = max(0, fig["y"] - 200)
            ch = min(fig["h"] + 280, 1100 - cy)
            page.screenshot(
                path=f"{SCREENSHOTS_DIR}/injection_map_v2_full.png",
                clip={"x": 0, "y": cy, "width": 1600, "height": ch}
            )
            print(f"\nSaved injection_map_v2_full.png (fig-based fallback)")
        else:
            page.screenshot(path=f"{SCREENSHOTS_DIR}/injection_map_v2_full.png")

        # ── Figure close-up ────────────────────────────────────────────────────
        if fig and 0 <= fig["y"] < 1100:
            pad = 30
            fx = max(0, fig["x"] - pad)
            fy = max(0, fig["y"] - pad)
            fw = min(fig["w"] + pad*2, 1600 - fx)
            fh = min(fig["h"] + pad*2, 1100 - fy)
            if fw > 0 and fh > 0:
                page.screenshot(
                    path=f"{SCREENSHOTS_DIR}/injection_figure_v2.png",
                    clip={"x": fx, "y": fy, "width": fw, "height": fh}
                )
                print(f"Saved injection_figure_v2.png ({fx},{fy}) {fw}x{fh}")

        # ── Final hotspot report relative to figure ────────────────────────────
        print(f"\n=== HOTSPOT COORDINATES RELATIVE TO FIGURE IMAGE ===")
        if fig:
            print(f"Figure: x={fig['x']}, y={fig['y']}, w={fig['w']}, h={fig['h']}\n")
            print(f"{'Label':<30} {'vp(cx,cy)':<18} {'rel_x':>6}  {'rel_y':>6}  {'%W':>6}  {'%H':>6}")
            print("-" * 80)
            for h in hotspots:
                rx = h["cx"] - fig["x"]
                ry = h["cy"] - fig["y"]
                pw = round(rx/fig["w"]*100, 1) if fig["w"] else 0
                ph = round(ry/fig["h"]*100, 1) if fig["h"] else 0
                print(f"{h['label']:<30} ({h['cx']:>5},{h['cy']:>5})  {rx:>6}  {ry:>6}  {pw:>5}%  {ph:>5}%")

        browser.close()
        print("\nDone.")


if __name__ == "__main__":
    capture()
