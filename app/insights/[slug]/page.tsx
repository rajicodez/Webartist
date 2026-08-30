import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ChevronRight } from "lucide-react";
import Footer from "../../../components/Footer";
import { insights, publishedInsights } from "../../../lib/editorial";
import { siteConfig } from "../../../lib/seo";
import { founders, personSchema } from "../../../lib/team";

export function generateStaticParams() { return publishedInsights.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const item = publishedInsights.find((entry) => entry.slug === slug); if (!item) return {};
  return { title: item.title, description: item.description, alternates: { canonical: `/insights/${item.slug}` }, openGraph: { title: item.title, description: item.description, type: "article", url: `/insights/${item.slug}`, publishedTime: item.published, modifiedTime: item.updated, authors: [item.author] } };
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const item = insights.find((entry) => entry.slug === slug); if (!item || item.status !== "published") notFound();
  const author = founders.find((founder) => founder.name === item.author)!; const reviewer = founders.find((founder) => founder.name === item.reviewer)!;
  const url = `${siteConfig.url}/insights/${item.slug}`;
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "Article", "@id": `${url}#article`, headline: item.title, description: item.description, datePublished: item.published, dateModified: item.updated, mainEntityOfPage: url, author: { "@id": `${siteConfig.url}/team#${author.slug}` }, reviewedBy: { "@id": `${siteConfig.url}/team#${reviewer.slug}` }, publisher: { "@id": `${siteConfig.url}/#organization` }, inLanguage: "en-LK" },
    personSchema(author), personSchema(reviewer),
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "Insights", item: `${siteConfig.url}/insights` }, { "@type": "ListItem", position: 3, name: item.title, item: url }] },
  ] };
  return <main className="min-h-screen bg-black text-white"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <article><header className="px-6 pb-16 pt-36 md:pt-44"><div className="mx-auto max-w-4xl">
      <nav aria-label="Breadcrumb" className="mb-9 flex flex-wrap items-center gap-2 text-sm text-gray-500"><Link href="/">Home</Link><ChevronRight className="h-4 w-4"/><Link href="/insights">Insights</Link><ChevronRight className="h-4 w-4"/><span aria-current="page">{item.category}</span></nav>
      <p className="font-mono text-sm uppercase tracking-[.2em] text-blue-300">{item.category}</p><h1 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">{item.title}</h1><p className="mt-7 text-xl leading-relaxed text-gray-300">{item.description}</p>
      <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500"><Link href={`/team#${author.slug}`} className="text-gray-300 hover:text-white">By {item.author}</Link><span>Reviewed by {item.reviewer}</span><time dateTime={item.updated}>Updated {item.updated}</time><span>{item.readingTime}</span></div>
    </div></header>
    <div className="border-y border-white/10 bg-white/[.02] px-6 py-16"><div className="mx-auto max-w-3xl space-y-16">
      {item.sections.map((section) => <section key={section.heading}><h2 className="text-3xl font-bold">{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph} className="mt-5 text-lg leading-8 text-gray-300">{paragraph}</p>)}{section.bullets && <ul className="mt-6 space-y-3">{section.bullets.map((bullet) => <li key={bullet} className="rounded-xl border border-white/10 bg-black/50 px-5 py-4 text-gray-300">{bullet}</li>)}</ul>}</section>)}
      <aside className="rounded-3xl border border-blue-500/20 bg-blue-500/10 p-8"><h2 className="text-2xl font-bold">Turn this into an action plan</h2><p className="mt-3 text-gray-300">Discuss your current position with Kindforth and get a practical next step.</p><Link href={item.relatedService} className="mt-6 inline-flex items-center gap-2 font-bold text-blue-200">Explore {item.relatedServiceLabel} <ArrowRight className="h-4 w-4"/></Link></aside>
    </div></div></article><Footer /></main>;
}
