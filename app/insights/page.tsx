import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import Footer from "../../components/Footer";
import { publishedInsights } from "../../lib/editorial";
import { createMetadata } from "../../lib/seo";

export const metadata = createMetadata({ title: "Insights on AI, Software & SEO in Sri Lanka", description: "Founder-reviewed guides from Kindforth on AI, automation, software decisions, SEO, AEO, GEO, and building digital products in Sri Lanka.", path: "/insights" });

export default function InsightsPage() {
  return <main className="min-h-screen bg-black text-white">
    <section className="px-6 pb-20 pt-40 md:pt-48"><div className="mx-auto max-w-6xl">
      <p className="font-mono text-sm uppercase tracking-[.22em] text-blue-300">Kindforth Insights</p>
      <h1 className="mt-5 max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">Practical thinking from the work</h1>
      <p className="mt-7 max-w-3xl text-xl leading-relaxed text-gray-400">Original, founder-reviewed guidance for Sri Lankan teams making decisions about search growth, AI, automation, and software.</p>
    </div></section>
    <section className="border-y border-white/10 bg-white/[.025] px-6 py-20"><div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
      {publishedInsights.map((item) => <article key={item.slug} className="group rounded-3xl border border-white/10 bg-black p-8 transition hover:border-blue-500/40">
        <BookOpen className="h-7 w-7 text-blue-400" aria-hidden="true" /><p className="mt-8 font-mono text-xs uppercase tracking-widest text-blue-300">{item.category} · {item.readingTime}</p>
        <h2 className="mt-4 text-3xl font-bold leading-tight"><Link href={`/insights/${item.slug}`}>{item.title}</Link></h2>
        <p className="mt-4 leading-relaxed text-gray-400">{item.description}</p>
        <p className="mt-6 text-sm text-gray-500">By {item.author} · Updated {item.updated}</p>
        <Link href={`/insights/${item.slug}`} className="mt-7 inline-flex items-center gap-2 font-semibold text-blue-300">Read the guide <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
      </article>)}
    </div></section><Footer /></main>;
}
