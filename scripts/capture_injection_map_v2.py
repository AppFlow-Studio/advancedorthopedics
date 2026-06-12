from playwright.sync_api import sync_playwright
import time

URL = "http://localhost:3000/treatments/orthopedic-injections"
SCREENSHOTS_DIR = "C:/Users/Bilal/appflows/ortho/advancedorthopedics/screenshots"


def capture():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={"width": 1920, "height": 1080})

        # Use domcontentloaded — fastest reliable signal; then wait for images manually
        page.goto(URL, wait_until="domcontentloaded", timeout=90000)

        # Wait for the anatomy figure img to be visible
        try:
            page.wait_for_selector(
                'img[alt*="anatomy"], img[alt*="injection treatment"]',
                state="visible", timeout=30000
            )
            print("Anatomy figure img found in DOM")
        except Exception as e:
            print(f"Anatomy img selector timed out: {e}")

        time.sleep(2)  # extra settle time for JS/hydration

        # ── Step 1: Scroll anatomy figure into view ───────────────────────────
        page.evaluate("""
            () => {
                const img = document.querySelector('img[alt*="anatomy"], img[alt*="injection treatment"]')
                         || Array.from(document.querySelectorAll('img')).find(i => (i.src||'').includes('Injections-Interactive'));
                if (img) { img.scrollIntoView({ behavior: 'instant', block: 'center' }); }
            }
        """)
        time.sleep(0.8)

        # ── Step 2: Collect layout data ───────────────────────────────────────
        def collect_layout():
            return page.evaluate("""
                () => {
                    const figImg = document.querySelector('img[alt*="anatomy"], img[alt*="injection treatment"]')
                                || Array.from(document.querySelectorAll('img')).find(i => (i.src||'').includes('Injections-Interactive'));
                    const figR = figImg ? figImg.getBoundingClientRect() : null;

                    // Find 3-col wrapper via heading
                    const heading = Array.from(document.querySelectorAll('h2,h3,h4'))
                        .find(h => h.textContent.trim().includes('Interactive Injection Relief Map'));
                    let wrapper = null;
                    if (heading) {
                        let el = heading;
                        for (let i = 0; i < 12; i++) {
                            el = el.parentElement;
                            if (!el) break;
                            const r = el.getBoundingClientRect();
                            if (r.width > 1200 && r.height > 200 && r.height < 1500) {
                                wrapper = el; break;
                            }
                        }
                    }
                    const wR = wrapper ? wrapper.getBoundingClientRect() : null;

                    // Hotspot buttons
                    const hotspots = [];
                    document.querySelectorAll('button').forEach(btn => {
                        const lbl = btn.getAttribute('aria-label') || '';
                        if (lbl.startsWith('Select ')) {
                            const r = btn.getBoundingClientRect();
                            hotspots.push({
                                label: lbl,
                                cx: Math.round(r.x + r.width/2), cy: Math.round(r.y + r.height/2),
                                x: Math.round(r.x), y: Math.round(r.y),
                                w: Math.round(r.width), h: Math.round(r.height),
                            });
                        }
                    });

                    return {
                        fig: figR ? { x:Math.round(figR.x), y:Math.round(figR.y), w:Math.round(figR.width), h:Math.round(figR.height) } : null,
                        wrapper: wR ? { x:Math.round(wR.x), y:Math.round(wR.y), w:Math.round(wR.width), h:Math.round(wR.height) } : null,
                        hotspots,
                        scrollY: Math.round(window.scrollY),
                    };
                }
            """)

        data = collect_layout()
        print("Initial — ScrollY:", data["scrollY"])
        print("Fig:", data["fig"])
        print("Wrapper:", data["wrapper"])
        print("Hotspots found:", len(data["hotspots"]))

        fig = data["fig"]
        wrapper = data["wrapper"]

        # ── Step 3: Scroll so the section top is near viewport top ────────────
        # Target element for top alignment
        anchor = wrapper or ({"y": fig["y"] - 200} if fig else None)
        if anchor:
            desired_top = anchor["y"] - 30  # this much below current viewport top
            page.evaluate(f"window.scrollBy(0, {desired_top})")
            time.sleep(0.6)
            data = collect_layout()
            print("\nAfter scroll — ScrollY:", data["scrollY"])
            print("Fig:", data["fig"])
            print("Wrapper:", data["wrapper"])
            fig = data["fig"]
            wrapper = data["wrapper"]

        # ── Step 4: Full-section screenshot ───────────────────────────────────
        ref = wrapper if (wrapper and 0 <= wrapper["y"] < 900 and wrapper["h"] < 1000) else None
        if ref:
            cy = max(0, ref["y"] - 10)
            ch = min(ref["h"] + 20, 1080 - cy)
            page.screenshot(
                path=f"{SCREENSHOTS_DIR}/injection_map_v2_full.png",
                clip={"x": max(0, ref["x"]), "y": cy, "width": min(ref["w"], 1920), "height": ch}
            )
            print(f"\nSaved injection_map_v2_full.png (wrapper clip: y={cy}, h={ch})")
        elif fig and 0 <= fig["y"] < 1000:
            cy = max(0, fig["y"] - 260)
            ch = min(fig["h"] + 340, 1080 - cy)
            page.screenshot(
                path=f"{SCREENSHOTS_DIR}/injection_map_v2_full.png",
                clip={"x": 0, "y": cy, "width": 1920, "height": ch}
            )
            print(f"\nSaved injection_map_v2_full.png (fig-based: y={cy}, h={ch})")
        else:
            page.screenshot(path=f"{SCREENSHOTS_DIR}/injection_map_v2_full.png")
            print(f"\nSaved injection_map_v2_full.png (full viewport fallback, fig={fig})")

        # ── Step 5: Figure close-up screenshot ────────────────────────────────
        if fig and 0 <= fig["y"] < 1080:
            pad = 25
            fx = max(0, fig["x"] - pad)
            fy = max(0, fig["y"] - pad)
            fw = min(fig["w"] + pad*2, 1920 - fx)
            fh = min(fig["h"] + pad*2, 1080 - fy)
            if fw > 0 and fh > 0:
                page.screenshot(
                    path=f"{SCREENSHOTS_DIR}/injection_figure_v2.png",
                    clip={"x": fx, "y": fy, "width": fw, "height": fh}
                )
                print(f"Saved injection_figure_v2.png ({fx},{fy}) {fw}x{fh}")
            else:
                print(f"Bad fig clip: {fx},{fy},{fw},{fh}")
        else:
            print(f"Fig not in viewport: {fig}")

        # ── Step 6: Hotspot report ─────────────────────────────────────────────
        print("\n=== HOTSPOT COORDINATES RELATIVE TO FIGURE ===")
        if fig and data["hotspots"]:
            print(f"Figure img: x={fig['x']}, y={fig['y']}, w={fig['w']}, h={fig['h']}")
            print(f"\n{'Label':<30} {'viewport (cx,cy)':<22} {'rel_x':>6}  {'rel_y':>6}  {'%W':>6}  {'%H':>6}")
            print("-" * 85)
            for h in data["hotspots"]:
                rx = h["cx"] - fig["x"]
                ry = h["cy"] - fig["y"]
                pw = round(rx / fig["w"] * 100, 1) if fig["w"] else 0
                ph = round(ry / fig["h"] * 100, 1) if fig["h"] else 0
                print(f"{h['label']:<30} ({h['cx']:>5},{h['cy']:>5})         {rx:>6}  {ry:>6}  {pw:>5}%  {ph:>5}%")
        else:
            print("No hotspot data available")

        browser.close()
        print("\nDone.")


if __name__ == "__main__":
    capture()
