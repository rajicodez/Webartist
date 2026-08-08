import type { ReactNode } from "react";
import { createMetadata } from "../../../lib/seo";
import { servicePages } from "../../../lib/services";

const service = servicePages["web-application-development"];

export const metadata = createMetadata({ title: service.metaTitle, description: service.description, path: service.href, absoluteTitle: true });

export default function WebApplicationLayout({ children }: { children: ReactNode }) {
  return children;
}
