import type { ReactNode } from "react";
import { createMetadata } from "../../lib/seo";

export const metadata = createMetadata({
  title: "About Our AI Engineering Company",
  description:
    "Meet Kindforth, a Sri Lankan technology company building practical AI, automation, software, web, and organic growth systems for ambitious businesses.",
  path: "/about",
});

export default function AboutLayout({ children }: { children: ReactNode }) {
  return children;
}
