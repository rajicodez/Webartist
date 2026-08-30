import type { ReactNode } from "react";
import { createMetadata } from "../../lib/seo";

export const metadata = createMetadata({
  title: "Careers at Kindforth",
  description:
    "Learn about future engineering and growth opportunities at Kindforth. There are currently no open positions.",
  path: "/careers",
  noIndex: true,
});

export default function CareersLayout({ children }: { children: ReactNode }) {
  return children;
}
