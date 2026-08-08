import { ArrowRight, BrainCircuit, Code2, Search, Workflow, PanelsTopLeft } from "lucide-react";
import Link from "next/link";
import { serviceLinks, type ServiceKey } from "../lib/services";

const icons = {
  "ai-development": BrainCircuit,
  "business-automation": Workflow,
  "custom-software-development": Code2,
  "web-application-development": PanelsTopLeft,
  seo: Search,
} satisfies Record<ServiceKey, typeof BrainCircuit>;

const descriptions: Record<ServiceKey, string> = {
  "ai-development": "Generative AI, ML, deep learning, computer vision, NLP, and production AI systems.",
  "business-automation": "Connected workflows that reduce manual work, delays, and operational errors.",
  "custom-software-development": "Purpose-built platforms, internal systems, SaaS products, and integrations.",
  "web-application-development": "Fast portals, dashboards, booking platforms, and browser-based products.",
  seo: "Technical SEO, content strategy, local visibility, and measurable organic growth.",
};

export default function ServiceStrip() {
  return (
    <section className="relative z-20 border-y border-white/10 bg-white/[0.04] py-20" aria-labelledby="home-services-heading">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-blue-400">What we do</p>
            <h2 id="home-services-heading" className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              Five ways we help businesses move forward
            </h2>
          </div>
          <Link href="/services" className="inline-flex items-center gap-2 font-semibold text-blue-300 transition-colors hover:text-blue-200">
            Explore all services
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {serviceLinks.map((service) => {
            const Icon = icons[service.key];
            return (
              <Link key={service.href} href={service.href} className="group flex flex-col rounded-3xl border border-white/10 bg-black/30 p-6 transition-all hover:-translate-y-1 hover:border-blue-500/40 hover:bg-white/[0.05]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600/15 text-blue-400 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-lg font-bold text-white">{service.label}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-400">{descriptions[service.key]}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gray-300 group-hover:text-blue-300">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
