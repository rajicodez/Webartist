import type { ReactNode } from "react";
import { createMetadata } from "../../lib/seo";

export const metadata = createMetadata({
  title: "AI Engineering Careers in Sri Lanka",
  description:
    "Explore AI engineering, data science, and frontend development opportunities with Kindforth in Sri Lanka and remotely.",
  path: "/careers",
});

export default function CareersLayout({ children }: { children: ReactNode }) {
  return children;
}
