"""
Second pass: now we know the page structure.
- Figure: x=943, y≈226 (viewport), w=340, h=660
- Page is scrolled to ~2931px
- Section is a flex row — left col (nav pills) + center col (figure) + right col (info panel)
- We need to find the right bounds to capture all 3 columns
- The 3-col wrapper wasn't found automatically — let's find it differently
"""
from playwright.sync_api import sync_playwright
import time

URL = "http://localhost:3000/treatments/orthopedic-injections"
SCREENSHOTS_DIR = "C:/Users/Bilal/appflows/ortho/advancedorthopedics/screenshots"


def capture():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={"width": 1920, "height": 1080})
        page.goto(URL, wait_until="domcontentloaded", timeout=90000)
        try:
            page.wait_for_selector('img[alt*="anatomy"], img[alt*="injection treatment"]', state="visible", timeout=30000)
        except Exception as e:
            print(f"Wait error: {e}")
        time.sleep(2)

        # Scroll figure into view
        page.evaluate("""
            () => {
                const img = document.querySelector('img[alt*="anatomy"], img[alt*="injection treatment"]')
                         || Array.from(document.querySelectorAll('img')).find(i=>(i.src||'').includes('Injections-Interactive'));
                if (img) img.scrollIntoView({ behavior:'instant', block:'center' });
            }
        """)
        time.sleep(0.8)

        # Inspect the DOM structure around the figure to find the 3-col wrapper
        dom_info = page.evaluate("""
            () => {
                const figImg = document.querySelector('img[alt*="anatomy"], img[alt*="injection treatment"]')
                            || Array.from(document.querySelectorAll('img')).find(i=>(i.src||'').includes('Injections-Interactive'));
                if (!figImg) return { error: 'no figure img' };

                // Walk up and collect ancestor info
                const ancestors = [];
                let el = figImg;
                for (let i = 0; i < 15; i++) {
                    el = el.parentElement;
                    if (!el) break;
                    const r = el.getBoundingClientRect();
                    ancestors.push({
                        level: i+1,
                        tag: el.tagName,
                        class: el.className.slice(0, 100),
                        x: Math.round(r.x), y: Math.round(r.y),
                        w: Math.round(r.width), h: Math.round(r.height),
                        children: el.children.length,
                    });
                    if (r.width >= 1900) break; // hit full-width container
                }

                const figR = figImg.getBoundingClientRect();
                return { ancestors, figRect: { x:Math.round(figR.x), y:Math.round(figR.y), w:Math.round(figR.width), h:Math.round(figR.height) } };
            }
        """)

        print("Figure rect:", dom_info["figRect"])
        print("\nAncestors:")
        for a in dom_info["ancestors"]:
            print(f"  L{a['level']} <{a['tag']}> [{a['w']}x{a['h']} @ ({a['x']},{a['y']})] children={a['children']}  class={a['class'][:70]}")

        # Based on the ancestor walk, identify the 3-col row:
        # We want a container that has ~3 children and is wider than 1000px but not full-width
        three_col = page.evaluate("""
            () => {
                const figImg = document.querySelector('img[alt*="anatomy"], img[alt*="injection treatment"]')
                            || Array.from(document.querySelectorAll('img')).find(i=>(i.src||'').includes('Injections-Interactive'));
                if (!figImg) return null;
                let el = figImg;
                for (let i = 0; i < 15; i++) {
                    el = el.parentElement;
                    if (!el) break;
                    const r = el.getBoundingClientRect();
                    const style = window.getComputedStyle(el);
                    const display = style.display;
                    const isFlexRow = display === 'flex' && (style.flexDirection === 'row' || style.flexDirection === '');
                    const isGrid = display === 'grid';
                    if ((isFlexRow || isGrid) && el.children.length >= 2 && r.width > 800 && r.height > 300) {
                        return {
                            x: Math.round(r.x), y: Math.round(r.y),
                            w: Math.round(r.width), h: Math.round(r.height),
                            display, flexDir: style.flexDirection,
                            children: el.children.length,
                            class: el.className.slice(0, 120),
                        };
                    }
                }
                return null;
            }
        """)
        print("\n3-col flex/grid wrapper:", three_col)

        # Also get the section-level container (direct parent of heading + the 3-col row)
        section_container = page.evaluate("""
            () => {
                const heading = Array.from(document.querySelectorAll('h2,h3'))
                    .find(h => h.textContent.trim().includes('Interactive Injection Relief Map'));
                if (!heading) return null;
                // The section container should be an ancestor of both heading and the figure
                const figImg = document.querySelector('img[alt*="anatomy"], img[alt*="injection treatment"]')
                            || Array.from(document.querySelectorAll('img')).find(i=>(i.src||'').includes('Injections-Interactive'));
                if (!figImg) return null;

                // Find common ancestor
                let el = heading;
                while (el) {
                    if (el.contains(figImg)) {
                        const r = el.getBoundingClientRect();
                        if (r.width > 800) {
                            return {
                                x: Math.round(r.x), y: Math.round(r.y),
                                w: Math.round(r.width), h: Math.round(r.height),
                                tag: el.tagName, class: el.className.slice(0,120)
                            };
                        }
                    }
                    el = el.parentElement;
                }
                return null;
            }
        """)
        print("Section (heading+figure) container:", section_container)

        # ── Get hotspots ──────────────────────────────────────────────────────
        hotspots = page.evaluate("""
            () => {
                const results = [];
                document.querySelectorAll('button').forEach(btn => {
                    const lbl = btn.getAttribute('aria-label') || '';
                    if (lbl.startsWith('Select ')) {
                        const r = btn.getBoundingClientRect();
                        results.push({ label: lbl, cx: Math.round(r.x+r.width/2), cy: Math.round(r.y+r.height/2), x:Math.round(r.x), y:Math.round(r.y), w:Math.round(r.width), h:Math.round(r.height) });
                    }
                });
                return results;
            }
        """)

        fig = dom_info["figRect"]

        # ── Determine clip regions ────────────────────────────────────────────
        # The section_container gives us the full section including heading + 3 cols
        # We want to capture it with the figure centered/visible

        if section_container:
            sc = section_container
            print(f"\nSection container: y={sc['y']}, h={sc['h']}")
            # If too tall, limit to figure area
            if sc["h"] > 1000:
                # Crop to just the part around the figure
                top = min(sc["y"], fig["y"] - 100)
                top = max(0, top)
                bot = min(fig["y"] + fig["h"] + 60, 1080)
                h_px = bot - top
                full_clip = {"x": max(0, sc["x"]), "y": top, "width": min(sc["w"], 1920), "height": h_px}
            else:
                top = max(0, sc["y"] - 10)
                bot = min(sc["y"] + sc["h"] + 10, 1080)
                full_clip = {"x": max(0, sc["x"]), "y": top, "width": min(sc["w"], 1920), "height": bot - top}
        elif fig and 0 <= fig["y"] < 900:
            top = max(0, fig["y"] - 260)
            bot = min(fig["y"] + fig["h"] + 60, 1080)
            full_clip = {"x": 0, "y": top, "width": 1920, "height": bot - top}
        else:
            full_clip = None

        print("Full clip region:", full_clip)

        if full_clip and full_clip["height"] > 0 and full_clip["width"] > 0:
            page.screenshot(path=f"{SCREENSHOTS_DIR}/injection_map_v2_full.png", clip=full_clip)
            print(f"Saved injection_map_v2_full.png")
        else:
            page.screenshot(path=f"{SCREENSHOTS_DIR}/injection_map_v2_full.png")
            print("Saved injection_map_v2_full.png (fallback)")

        # Figure close-up
        if fig and 0 <= fig["y"] < 1080:
            pad = 25
            fx, fy = max(0, fig["x"]-pad), max(0, fig["y"]-pad)
            fw = min(fig["w"]+pad*2, 1920-fx)
            fh = min(fig["h"]+pad*2, 1080-fy)
            if fw > 0 and fh > 0:
                page.screenshot(path=f"{SCREENSHOTS_DIR}/injection_figure_v2.png",
                                 clip={"x":fx,"y":fy,"width":fw,"height":fh})
                print(f"Saved injection_figure_v2.png ({fx},{fy}) {fw}x{fh}")

        # ── Hotspot report ────────────────────────────────────────────────────
        print(f"\n=== HOTSPOT COORDINATES RELATIVE TO FIGURE IMAGE ===")
        print(f"Figure: x={fig['x']}, y={fig['y']}, w={fig['w']}, h={fig['h']}\n")
        print(f"{'Label':<30} {'vp(cx,cy)':<18} {'rel_x':>6}  {'rel_y':>6}  {'%W':>6}  {'%H':>6}")
        print("-" * 80)
        for h in hotspots:
            rx = h["cx"] - fig["x"]
            ry = h["cy"] - fig["y"]
            pw = round(rx/fig["w"]*100,1) if fig["w"] else 0
            ph = round(ry/fig["h"]*100,1) if fig["h"] else 0
            print(f"{h['label']:<30} ({h['cx']:>5},{h['cy']:>5})  {rx:>6}  {ry:>6}  {pw:>5}%  {ph:>5}%")

        browser.close()
        print("\nDone.")


if __name__ == "__main__":
    capture()
