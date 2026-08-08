import type { ReactNode } from "react";
import { createMetadata } from "../../lib/seo";

export const metadata = createMetadata({
  title: "Apply to Kindforth",
  description: "Submit an application for an open role at Kindforth.",
  path: "/apply",
  noIndex: true,
});

export default function ApplyLayout({ children }: { children: ReactNode }) {
  return children;
}
