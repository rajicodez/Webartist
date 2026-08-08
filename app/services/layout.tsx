import type { ReactNode } from "react";
import { createMetadata } from "../../lib/seo";

export const metadata = createMetadata({
  title: "AI, Automation, Software & SEO Services",
  description:
    "Explore Kindforth's AI development, business automation, custom software, web application, and SEO services for Sri Lankan SMEs and international companies.",
  path: "/services",
});

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return children;
}
