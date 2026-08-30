import Founders from "../../components/Founders";
import Footer from "../../components/Footer";
import { founders, personSchema } from "../../lib/team";
import { siteConfig } from "../../lib/seo";

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          ...founders.map(personSchema),
          { "@type": "BreadcrumbList", itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
            { "@type": "ListItem", position: 2, name: "Team", item: `${siteConfig.url}/team` },
          ] },
        ],
      }).replace(/</g, "\\u003c") }} />
      <div className="pt-20"> {/* Padding for fixed navbar */}
        <Founders />
      </div>
      <Footer />
    </main>
  );
}
