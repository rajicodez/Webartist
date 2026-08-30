"use client";

import Link from "next/link";
import type { ComponentProps, MouseEvent } from "react";

type Props = ComponentProps<typeof Link> & {
  eventName: string;
  eventData?: Record<string, string>;
};

export default function TrackedLink({ eventName, eventData, onClick, ...props }: Props) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const analyticsWindow = window as Window & { dataLayer?: Record<string, unknown>[] };
    analyticsWindow.dataLayer?.push({ event: eventName, ...eventData });
    onClick?.(event);
  };

  return <Link {...props} onClick={handleClick} />;
}
