import type { ReactNode } from "react";
import { createMetadata } from "../../lib/seo";

export const metadata = createMetadata({
  title: "Contact Kindforth in Sri Lanka",
  description:
    "Talk to Kindforth about AI automation, chatbots, computer vision, analytics, or intelligent web development for your business.",
  path: "/contact",
});

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
