import type { ReactNode } from "react";
import { createMetadata } from "../../../lib/seo";
import { servicePages } from "../../../lib/services";

const service = servicePages.seo;

export const metadata = createMetadata({ title: service.metaTitle, description: service.description, path: service.href, absoluteTitle: true });

export default function SeoLayout({ children }: { children: ReactNode }) {
  return children;
}
