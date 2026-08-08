import type { ReactNode } from "react";
import { createMetadata } from "../../lib/seo";

export const metadata = createMetadata({
  title: "AI & Web Development Case Studies",
  description:
    "See how Kindforth has delivered healthcare automation, booking platforms, audience experiences, and intelligent websites for real organizations.",
  path: "/work",
});

export default function WorkLayout({ children }: { children: ReactNode }) {
  return children;
}
