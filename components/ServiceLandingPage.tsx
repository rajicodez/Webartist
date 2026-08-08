import { ArrowRight, Check, ChevronRight } from "lucide-react";
import Link from "next/link";
import type { ServicePageData } from "../lib/services";
import { serviceLinks } from "../lib/services";
import { siteConfig } from "../lib/seo";
import Footer from "./Footer";
import Testimonials from "./Testimonials";

const process = [
  { number: "01", title: "Discover", description: "Understand the business problem, users, constraints, data, and measurable definition of success." },
  { number: "02", title: "Design", description: "Shape the solution, validate key risks, and create a phased technical and delivery plan." },
  { number: "03", title: "Build", description: "Develop in focused iterations with demonstrations, feedback, testing, and clear progress visibility." },
  { number: "04", title: "Improve", description: "Launch, monitor real usage, support your team, and improve the system using evidence." },
];

export default function ServiceLandingPage({ service }: { service: ServicePageData }) {
  const relatedServices = serviceLinks.filter((item) => item.key !== service.key).slice(0, 3);
  const serviceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${siteConfig.url}${service.href}/#service`,
        name: service.navLabel,
        serviceType: service.navLabel,
        description: service.description,
        url: `${siteConfig.url}${service.href}`,
        provider: { "@id": `${siteConfig.url}/#organization` },
        areaServed: [{ "@type": "Country", name: "Sri Lanka" }, "International"],
        audience: { "@type": "BusinessAudience", audienceType: "Small and medium-sized businesses" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/services` },
          { "@type": "ListItem", position: 3, name: service.navLabel, item: `${siteConfig.url}${service.href}` },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: service.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c") }}
      />

      <section className="relative overflow-hidden px-6 pb-24 pt-36 md:pb-32 md:pt-48">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-[130px]" />
        <div className="relative mx-auto max-w-6xl">
          <nav aria-label="Breadcrumb" className="mb-10 flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="transition-colors hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
            <Link href="/services" className="transition-colors hover:text-white">Services</Link>
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
            <span className="text-gray-300" aria-current="page">{service.navLabel}</span>
          </nav>

          <div className="grid items-end gap-12 lg:grid-cols-[1.35fr_0.65fr]">
            <div>
              <p className="mb-5 font-mono text-sm uppercase tracking-[0.22em] text-blue-300">{service.eyebrow}</p>
              <h1 className="max-w-5xl text-5xl font-bold tracking-tight md:text-7xl md:leading-[1.05]">{service.title}</h1>
              <p className="mt-8 max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl">{service.introduction}</p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link href={`/contact?service=${service.key}`} className="mr-12 inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-4 font-semibold transition-colors hover:bg-blue-500 sm:mr-0">
                  {service.cta}
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
                <Link href="/work" className="mr-12 inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 font-semibold transition-colors hover:bg-white/10 sm:mr-0">
                  View our work
                </Link>
              </div>
            </div>

            <aside className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-300">Built for practical growth</p>
              <ul className="mt-5 space-y-4">
                {service.outcomes.map((outcome) => (
                  <li key={outcome} className="flex gap-3 text-sm leading-relaxed text-gray-300">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" aria-hidden="true" />
                    {outcome}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] px-6 py-24" aria-labelledby="capabilities-heading">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-blue-400">Capabilities</p>
            <h2 id="capabilities-heading" className="text-4xl font-bold tracking-tight md:text-5xl">What we can build with you</h2>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2">
            {service.capabilities.map((capability, index) => (
              <article key={capability.title} className="bg-[#080808] p-7 md:p-9">
                <p className="mb-5 font-mono text-xs text-blue-400">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="text-xl font-bold">{capability.title}</h3>
                <p className="mt-3 leading-relaxed text-gray-400">{capability.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-purple-400">Who it is for</p>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Designed for ambitious SMEs and growing teams</h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-400">
              Our primary focus is helping Sri Lankan companies apply modern technology in a commercially sensible way. We can also deliver remotely for international teams.
            </p>
          </div>
          <ul className="grid gap-4">
            {service.idealFor.map((item) => (
              <li key={item} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-gray-300">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] px-6 py-24" aria-labelledby="process-heading">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-blue-400">A clear delivery process</p>
          <h2 id="process-heading" className="text-4xl font-bold tracking-tight md:text-5xl">From business problem to working system</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <article key={step.number} className="rounded-3xl border border-white/10 bg-black/40 p-7">
                <p className="font-mono text-sm text-blue-400">{step.number}</p>
                <h3 className="mt-8 text-2xl font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Testimonials heading={`What clients say about Kindforth's ${service.navLabel.toLowerCase()}`} />

      <section className="px-6 py-24 md:py-32" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-center font-mono text-sm uppercase tracking-[0.2em] text-blue-400">Common questions</p>
          <h2 id="faq-heading" className="text-center text-4xl font-bold tracking-tight md:text-5xl">What to know before we begin</h2>
          <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
            {service.faqs.map((faq) => (
              <details key={faq.question} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold text-white marker:content-none">
                  {faq.question}
                  <span className="text-2xl font-light text-blue-400 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="max-w-3xl pt-4 leading-relaxed text-gray-400">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold">Explore related services</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {relatedServices.map((related) => (
              <Link key={related.href} href={related.href} className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-blue-500/40 hover:bg-white/[0.06]">
                <h3 className="flex items-center justify-between gap-4 text-lg font-bold">
                  {related.label}
                  <ArrowRight className="h-5 w-5 text-blue-400 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
