import type { ReactNode } from "react";
import { faqData } from "../../lib/faqs";
import { createMetadata } from "../../lib/seo";

export const metadata = createMetadata({
  title: "AI Development & Automation FAQs",
  description:
    "Answers about Kindforth's AI chatbots, automation, computer vision, development process, pricing, technology, and ongoing support.",
  path: "/faq",
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.flatMap((section) =>
    section.questions.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  ),
};

export default function FaqLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />
      {children}
    </>
  );
}
