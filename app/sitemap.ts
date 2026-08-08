import type { MetadataRoute } from "next";
import { siteConfig } from "../lib/seo";

const routes = [
  "",
  "/services",
  "/work",
  "/faq",
  "/about",
  "/team",
  "/contact",
  "/careers",
  "/privacy",
  "/terms",
  "/webartist-is-now-kindforth",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-08-07");

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/services" ? 0.9 : 0.7,
  }));
}
