import type { ReactNode } from "react";
import { createMetadata } from "../../lib/seo";

export const metadata = createMetadata({
  title: "About Our AI Engineering Company",
  description:
    "Meet Kindforth, formerly Webartist: a Sri Lankan AI engineering company building practical automation, data, and web systems for ambitious businesses.",
  path: "/about",
});

export default function AboutLayout({ children }: { children: ReactNode }) {
  return children;
}
