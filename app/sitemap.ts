import type { MetadataRoute } from "next";
import { siteConfig } from "../lib/seo";

const routes = [
  "",
  "/services",
  "/services/ai-development",
  "/services/business-automation",
  "/services/custom-software-development",
  "/services/web-application-development",
  "/services/seo",
  "/work",
  "/faq",
  "/about",
  "/team",
  "/contact",
  "/careers",
  "/privacy",
  "/terms",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-08-08");

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/services" ? 0.9 : route.startsWith("/services/") ? 0.85 : 0.7,
  }));
}
