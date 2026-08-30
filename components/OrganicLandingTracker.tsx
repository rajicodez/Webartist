"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function OrganicLandingTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const storageKey = "kindforth_landing_tracked";
    if (sessionStorage.getItem(storageKey)) return;

    const referrer = document.referrer;
    const isOrganic = /google\.|bing\.|yahoo\.|duckduckgo\.|ecosia\./i.test(referrer);
    const isAiReferral = /chatgpt\.com|perplexity\.ai|claude\.ai|gemini\.google\.com/i.test(referrer)
      || searchParams.get("utm_source") === "chatgpt.com";

    if (isOrganic || isAiReferral) {
      const analyticsWindow = window as Window & { dataLayer?: Record<string, unknown>[] };
      analyticsWindow.dataLayer?.push({
        event: "organic_landing",
        landing_page: pathname,
        source_type: isAiReferral ? "ai_referral" : "organic_search",
        referrer_host: referrer ? new URL(referrer).hostname : "utm",
      });
      sessionStorage.setItem(storageKey, "1");
    }
  }, [pathname, searchParams]);

  return null;
}
