import { ArrowRight, Bot, BrainCircuit, Code2, Search, Workflow } from "lucide-react";
import Link from "next/link";
import Footer from "../../components/Footer";
import { serviceLinks, servicePages, type ServiceKey } from "../../lib/services";

const icons = {
  "ai-development": BrainCircuit,
  "business-automation": Workflow,
  "custom-software-development": Code2,
  "web-application-development": Bot,
  seo: Search,
} satisfies Record<ServiceKey, typeof BrainCircuit>;

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <section className="relative overflow-hidden px-6 pb-24 pt-36 md:pb-32 md:pt-48">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-[130px]" />
        <div className="relative mx-auto max-w-6xl text-center">
          <p className="mb-5 font-mono text-sm uppercase tracking-[0.22em] text-blue-300">Kindforth services</p>
          <h1 className="text-5xl font-bold tracking-tight md:text-8xl">
            Technology that moves your business forward
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl">
            We help Sri Lankan SMEs use AI, automation, custom software, web applications, and organic search to operate better and grow with confidence.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-4 font-semibold transition-colors hover:bg-blue-500">
              Tell us what you need
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
            <Link href="/work" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 font-semibold transition-colors hover:bg-white/10">
              View our work
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] px-6 py-24" aria-labelledby="services-heading">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-blue-400">Choose a capability</p>
            <h2 id="services-heading" className="text-4xl font-bold tracking-tight md:text-5xl">Five focused services, one connected team</h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-400">
              Start with the business outcome you need. We will help you choose the right service—or combine capabilities when a project crosses disciplines.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {serviceLinks.map((service, index) => {
              const Icon = icons[service.key];
              const data = servicePages[service.key];
              return (
                <Link
                  key={service.href}
                  href={service.href}
                  className={`group rounded-3xl border border-white/10 bg-black/40 p-7 transition-all hover:-translate-y-1 hover:border-blue-500/40 hover:bg-white/[0.05] md:p-9 ${index === 0 ? "lg:col-span-2" : ""}`}
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
                      <Icon className="h-7 w-7" aria-hidden="true" />
                    </div>
                    <ArrowRight className="h-6 w-6 text-gray-600 transition-all group-hover:translate-x-1 group-hover:text-blue-400" aria-hidden="true" />
                  </div>
                  <p className="mt-9 font-mono text-xs uppercase tracking-[0.18em] text-blue-400">Service {String(index + 1).padStart(2, "0")}</p>
                  <h2 className="mt-3 text-2xl font-bold md:text-3xl">{service.label}</h2>
                  <p className="mt-4 max-w-2xl leading-relaxed text-gray-400">{data.introduction}</p>
                  <p className="mt-6 font-semibold text-white">Explore {service.label.toLowerCase()}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-600/15 to-purple-600/10 p-8 md:grid-cols-[1fr_auto] md:items-center md:p-12">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-blue-300">Not sure where to begin?</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight">Start with the business problem, not the technology.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-300">
              Tell us what is slow, expensive, fragmented, or holding back growth. We will recommend a sensible first step without pushing a larger build than you need.
            </p>
          </div>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-black transition-colors hover:bg-blue-100">
            Start a conversation
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
