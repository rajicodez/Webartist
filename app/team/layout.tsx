import type { ReactNode } from "react";
import { createMetadata } from "../../lib/seo";

export const metadata = createMetadata({
  title: "Meet the Kindforth AI Engineering Team",
  description:
    "Meet the founders and engineers behind Kindforth's AI, data, automation, and modern web development work in Sri Lanka.",
  path: "/team",
});

export default function TeamLayout({ children }: { children: ReactNode }) {
  return children;
}
