"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";
import {
  META_PIXEL_SCRIPT_ID,
  META_PIXEL_SRC,
  initMetaPixel,
  isCurrentRouteMetaEligible,
  isMetaEnvironmentEnabled,
  resumeMetaForRoute,
  suspendMetaForRoute,
  trackMetaPageView,
} from "@/lib/meta-pixel";
import { isSensitivePath } from "@/lib/route-privacy";

/**
 * Meta Pixel loader + SPA route tracker.
 *
 * Rendered by CookieConsentManager ONLY while marketing consent is granted —
 * the same conditional-render pattern already used for the CallRail DNI script.
 * That gives correct behaviour for free:
 *
 *   granted        → this mounts, script loads, pixel initializes, one PageView
 *   rejected       → never mounts, no connect.facebook.net request is ever made
 *   granted later  → mounts immediately, fires PageView for the CURRENT page,
 *                    no refresh required
 *   revoked        → unmounts; CookieConsentManager also calls revokeMetaConsent()
 *                    and lib/consent.ts expires _fbp/_fbc
 *
 * PageView ownership is deliberately split so the first page cannot double-count:
 *   - the INITIAL PageView belongs to initMetaPixel()
 *   - every SUBSEQUENT path transition belongs to the effect below
 *
 * `usePathname` is used but `useSearchParams` deliberately is NOT. This
 * component mounts from the root layout, and useSearchParams would force every
 * statically generated route in the app to deopt into client-side rendering.
 * Query-string eligibility is therefore enforced at *event* time instead, by
 * isMetaAllowed() reading window.location.search live — so a URL carrying a
 * sensitive key such as `?data=` fires no PageView, Lead or Contact even though
 * the loader script may already be mounted from the previous path. Loading
 * fbevents.js transmits no page URL by itself; only events do.
 *
 * ROUTE SUSPENSION. Verified in-browser: a resident fbevents.js fires its OWN
 * PageView on history changes, with no fbq() call from this codebase, and
 * unmounting the <Script> does not stop it. Staying silent is therefore not
 * sufficient to keep a clinical URL away from Meta — the effect below calls
 * suspendMetaForRoute() (fbq consent revoke) on every ineligible route and
 * resumeMetaForRoute() when an eligible one returns.
 *
 * The vendor's inline `fbq('init'); fbq('track','PageView')` is intentionally
 * not used, and the vendor <noscript> pixel is intentionally omitted — see
 * docs/meta-tracking.md.
 */
export default function MetaPixel() {
  const pathname = usePathname();

  // Last path we counted a PageView for. Keyed by pathname only, never by an
  // object identity, so a rerender from consent state or React Strict Mode
  // cannot emit a duplicate PageView.
  const lastTrackedPath = useRef<string | null>(null);

  // Path-level gate for whether the loader may mount at all. The full check
  // (path + live query string + environment) runs inside the adapter on every
  // dispatch. The environment check is repeated here so a local or preview
  // origin never even requests connect.facebook.net.
  const pathAllowed = !isSensitivePath(pathname || "/");

  useEffect(() => {
    // Query string can make an otherwise-fine path ineligible.
    if (!pathAllowed || !isCurrentRouteMetaEligible()) {
      // An already-resident fbevents.js fires its own PageView on history
      // changes, so going silent is not enough — Meta has to be told to stop.
      suspendMetaForRoute();
      return;
    }

    // Back on an eligible route: lift the route-level suppression (no-op unless
    // we actually suspended, and never against the visitor's consent choice).
    resumeMetaForRoute();

    // Idempotent: a Strict Mode double-invoke cannot init or PageView twice.
    const initializedNow = initMetaPixel();

    if (lastTrackedPath.current === null) {
      if (initializedNow) {
        // initMetaPixel already fired this page's PageView. Adopt it as counted
        // so the transition below does not count it again.
        lastTrackedPath.current = pathname;
      }
      // If init failed (blocked, or consent revoked between render and effect)
      // leave the guard unset so a later attempt can still initialize.
      return;
    }

    if (lastTrackedPath.current === pathname) return;

    lastTrackedPath.current = pathname;
    trackMetaPageView();
  }, [pathAllowed, pathname]);

  // No connect.facebook.net request at all on a sensitive path. Navigating to
  // an eligible path mounts the loader then.
  if (!pathAllowed) return null;
  if (typeof window !== "undefined" && !isMetaEnvironmentEnabled()) return null;

  return (
    <Script
      id={META_PIXEL_SCRIPT_ID}
      src={META_PIXEL_SRC}
      strategy="afterInteractive"
      onLoad={() => {
        // Covers the case where the effect ran before fbevents.js was ready.
        // initMetaPixel is idempotent, so this cannot produce a second PageView.
        if (initMetaPixel()) lastTrackedPath.current ??= pathname;
      }}
      onError={() => {
        // Ad blocker, network filter or browser privacy protection. Nothing to
        // do — every adapter export already no-ops when the pixel is absent.
      }}
    />
  );
}
