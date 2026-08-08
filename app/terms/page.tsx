import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../../components/Footer";
import { createMetadata, siteConfig } from "../../lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Website Terms of Use",
  description: "Terms that apply when using the Kindforth website and its public content.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <article className="legal-content max-w-3xl mx-auto px-6 pt-36 pb-24">
        <p className="text-blue-400 font-mono uppercase tracking-widest text-sm">Effective 7 August 2026</p>
        <h1>Website Terms of Use</h1>
        <p>
          These terms apply to your use of the public Kindforth website. A separate written agreement will
          govern any paid discovery, design, development, support, or consulting engagement.
        </p>

        <h2>Website information</h2>
        <p>
          Website content is provided for general information. Examples, estimates, technology references,
          and outcomes do not guarantee that every project will achieve the same result.
        </p>

        <h2>Acceptable use</h2>
        <p>
          You may not misuse the website, attempt unauthorized access, interfere with its operation,
          introduce malicious material, scrape it in a manner that causes harm, or use its content to
          violate another party&apos;s rights.
        </p>

        <h2>Intellectual property</h2>
        <p>
          Unless stated otherwise, Kindforth owns or licenses the website design, copy, code, graphics, and
          branding. Client names, logos, screenshots, and third-party marks remain the property of their
          respective owners.
        </p>

        <h2>Third-party services and links</h2>
        <p>
          The website may link to or rely on third-party services. Kindforth is not responsible for the
          availability, security, content, or policies of third-party websites and services.
        </p>

        <h2>Liability</h2>
        <p>
          To the extent permitted by applicable law, Kindforth is not liable for indirect or consequential
          loss arising solely from use of this public website. Nothing in these terms excludes liability
          that cannot legally be excluded.
        </p>

        <h2>Changes and contact</h2>
        <p>
          We may update these terms as the website changes. Questions can be sent to{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>

        <p><Link href="/contact">Contact Kindforth</Link></p>
      </article>
      <Footer />
    </main>
  );
}
