import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../../components/Footer";
import { createMetadata, siteConfig } from "../../lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description: "How Kindforth collects, uses, and protects information submitted through our website.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <article className="legal-content max-w-3xl mx-auto px-6 pt-36 pb-24">
        <p className="text-blue-400 font-mono uppercase tracking-widest text-sm">Effective 7 August 2026</p>
        <h1>Privacy Policy</h1>
        <p>
          This policy explains how Kindforth collects and uses information when you visit our website,
          contact us, use our chat experience, or apply for a role.
        </p>

        <h2>Information we collect</h2>
        <p>
          We may collect contact details, company information, project messages, chat questions,
          application details, uploaded documents, and technical usage information such as device,
          browser, page, and interaction data.
        </p>

        <h2>How we use information</h2>
        <p>
          We use information to respond to enquiries, evaluate projects and applications, operate and
          secure the website, improve our services, measure website performance, and meet applicable
          legal obligations. We do not sell personal information.
        </p>

        <h2>Service providers</h2>
        <p>
          Website and enquiry data may be processed by providers that support our hosting, analytics,
          forms, communication, and AI chat functions, including Vercel, Google services, Railway, and
          recruitment-form providers where enabled. Their processing is governed by their own terms and
          our arrangements with them.
        </p>

        <h2>Retention and security</h2>
        <p>
          We retain information only for as long as reasonably necessary for the purpose for which it was
          collected, dispute resolution, security, and legal compliance. We use reasonable technical and
          organizational safeguards, but no internet transmission or storage system is completely secure.
        </p>

        <h2>Your choices</h2>
        <p>
          You may ask us to access, correct, or delete personal information we hold about you, subject to
          applicable law and legitimate retention requirements. You may also ask questions about how your
          information is handled.
        </p>

        <h2>Contact</h2>
        <p>
          Email <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> for privacy enquiries. We may
          update this policy as our services or legal obligations change.
        </p>

        <p><Link href="/contact">Contact Kindforth</Link></p>
      </article>
      <Footer />
    </main>
  );
}
