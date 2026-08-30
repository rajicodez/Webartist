import type { MetadataRoute } from "next";
import { siteConfig } from "../lib/seo";
import { publishedCaseStudies, publishedInsights } from "../lib/editorial";

const pages = [
  ["", "2026-08-30", "weekly", 1], ["/services", "2026-08-30", "monthly", .9],
  ["/services/ai-development", "2026-08-08", "monthly", .85], ["/services/business-automation", "2026-08-08", "monthly", .85],
  ["/services/custom-software-development", "2026-08-08", "monthly", .85], ["/services/web-application-development", "2026-08-08", "monthly", .85],
  ["/services/seo", "2026-08-30", "weekly", .95], ["/work", "2026-08-30", "monthly", .85], ["/insights", "2026-08-30", "weekly", .85],
  ["/faq", "2026-08-08", "monthly", .65], ["/about", "2026-08-30", "monthly", .75], ["/team", "2026-08-30", "monthly", .8],
  ["/contact", "2026-08-08", "monthly", .75], ["/privacy", "2026-08-08", "yearly", .3], ["/terms", "2026-08-08", "yearly", .3],
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = pages.map(([path, modified, frequency, priority]) => ({ url: `${siteConfig.url}${path}`, lastModified: new Date(modified), changeFrequency: frequency, priority }));
  const articles = publishedInsights.map((item) => ({ url: `${siteConfig.url}/insights/${item.slug}`, lastModified: new Date(item.updated), changeFrequency: "monthly" as const, priority: .8 }));
  const cases = publishedCaseStudies.map((item) => ({ url: `${siteConfig.url}/work/${item.slug}`, lastModified: new Date(item.published), changeFrequency: "monthly" as const, priority: .8 }));
  return [...staticPages, ...articles, ...cases];
}
