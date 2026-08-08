import type { ReactNode } from "react";
import { createMetadata } from "../../lib/seo";

export const metadata = createMetadata({
  title: "AI Development Services in Sri Lanka",
  description:
    "Explore custom AI chatbots, workflow automation, computer vision, predictive analytics, and intelligent web development from Kindforth.",
  path: "/services",
});

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return children;
}
