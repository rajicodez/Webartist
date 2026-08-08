import { ArrowRight, BrainCircuit, Code2, Search, Workflow, PanelsTopLeft } from "lucide-react";
import type { LucideIcon } from "lucide-react";
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

const cardStyles: Record<ServiceKey, { border: string; glow: string; icon: string; link: string }> = {
  "ai-development": {
    border: "hover:border-violet-400/45",
    glow: "from-violet-500/20 via-blue-500/5",
    icon: "border-violet-400/25 bg-violet-500/15 text-violet-300",
    link: "group-hover:text-violet-300",
  },
  "business-automation": {
    border: "hover:border-blue-400/45",
    glow: "from-blue-500/20 via-cyan-500/5",
    icon: "border-blue-400/25 bg-blue-500/15 text-blue-300",
    link: "group-hover:text-blue-300",
  },
  "custom-software-development": {
    border: "hover:border-cyan-400/45",
    glow: "from-cyan-500/20 via-sky-500/5",
    icon: "border-cyan-400/25 bg-cyan-500/15 text-cyan-300",
    link: "group-hover:text-cyan-300",
  },
  "web-application-development": {
    border: "hover:border-indigo-400/45",
    glow: "from-indigo-500/20 via-blue-500/5",
    icon: "border-indigo-400/25 bg-indigo-500/15 text-indigo-300",
    link: "group-hover:text-indigo-300",
  },
  seo: {
    border: "hover:border-emerald-400/45",
    glow: "from-emerald-500/20 via-cyan-500/5",
    icon: "border-emerald-400/25 bg-emerald-500/15 text-emerald-300",
    link: "group-hover:text-emerald-300",
  },
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

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {serviceLinks.map((service, index) => {
            const Icon = icons[service.key];
            const styles = cardStyles[service.key];
            return (
              <Link
                key={service.href}
                href={service.href}
                className={`group relative isolate flex min-h-[410px] flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#08090c] p-3 shadow-[0_24px_80px_-45px_rgba(0,0,0,0.9)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_90px_-42px_rgba(59,130,246,0.35)] ${styles.border}`}
              >
                <div className={`pointer-events-none absolute inset-x-0 top-0 -z-10 h-52 bg-gradient-to-b ${styles.glow} to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100`} />

                <ServiceVisual serviceKey={service.key} Icon={Icon} iconClassName={styles.icon} />

                <div className="flex flex-1 flex-col px-3 pb-3 pt-5">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-[10px] tracking-[0.2em] text-gray-600">
                      0{index + 1}
                    </span>
                    <span className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" aria-hidden="true" />
                  </div>

                  <h3 className="mt-4 text-xl font-bold leading-tight text-white">{service.label}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-400">{descriptions[service.key]}</p>

                  <span className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gray-300 transition-colors ${styles.link}`}>
                    Explore service
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

type ServiceVisualProps = {
  serviceKey: ServiceKey;
  Icon: LucideIcon;
  iconClassName: string;
};

function ServiceVisual({ serviceKey, Icon, iconClassName }: ServiceVisualProps) {
  return (
    <div aria-hidden="true" className="relative h-36 overflow-hidden rounded-[1.25rem] border border-white/[0.08] bg-[#050608]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />
      <div className="absolute inset-x-5 top-4 flex items-center justify-between">
        <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
        <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-white/25">Kindforth system</span>
      </div>

      {serviceKey === "ai-development" && (
        <>
          <div className="absolute left-1/2 top-[54%] h-px w-24 -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-400/50 to-transparent" />
          <div className="absolute left-1/2 top-[54%] h-20 w-px -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-blue-400/45 to-transparent" />
          <div className="absolute left-[22%] top-[52%] h-2 w-2 rounded-full border border-violet-300/50 bg-violet-400/20 transition-transform duration-500 group-hover:scale-125" />
          <div className="absolute right-[22%] top-[52%] h-2 w-2 rounded-full border border-blue-300/50 bg-blue-400/20 transition-transform duration-500 group-hover:scale-125" />
          <div className="absolute left-1/2 top-[27%] h-2 w-2 -translate-x-1/2 rounded-full border border-cyan-300/40 bg-cyan-400/20 transition-transform duration-500 group-hover:scale-125" />
          <div className={`absolute left-1/2 top-[54%] flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border shadow-[0_0_30px_-8px_rgba(139,92,246,0.75)] transition-transform duration-500 group-hover:scale-105 ${iconClassName}`}>
            <Icon className="h-7 w-7" />
          </div>
        </>
      )}

      {serviceKey === "business-automation" && (
        <div className="absolute inset-x-5 bottom-5 top-10 flex items-center justify-between">
          {["IN", "AI", "OUT"].map((label, index) => (
            <div key={label} className="contents">
              <div className={`flex h-11 w-11 items-center justify-center rounded-xl border font-mono text-[9px] ${index === 1 ? iconClassName : "border-white/10 bg-white/[0.04] text-gray-500"}`}>
                {index === 1 ? <Icon className="h-5 w-5" /> : label}
              </div>
              {index < 2 && (
                <div className="relative h-px flex-1 bg-blue-400/25">
                  <span className="absolute right-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rotate-45 border-r border-t border-blue-300/60" />
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {serviceKey === "custom-software-development" && (
        <div className="absolute inset-x-5 bottom-4 top-10">
          <div className="absolute bottom-0 left-0 right-8 top-5 rounded-xl border border-cyan-400/15 bg-cyan-500/[0.04]" />
          <div className="absolute bottom-3 left-4 right-4 top-2 rounded-xl border border-cyan-400/20 bg-[#080c10] transition-transform duration-500 group-hover:-translate-y-1">
            <div className="grid h-full grid-cols-2 gap-2 p-3">
              <span className="rounded-md bg-cyan-400/10" />
              <span className="rounded-md border border-white/[0.06]" />
              <span className="col-span-2 rounded-md border border-white/[0.06]" />
            </div>
          </div>
          <div className={`absolute right-0 top-0 flex h-10 w-10 items-center justify-center rounded-xl border ${iconClassName}`}>
            <Icon className="h-5 w-5" />
          </div>
        </div>
      )}

      {serviceKey === "web-application-development" && (
        <div className="absolute inset-x-5 bottom-4 top-10 overflow-hidden rounded-xl border border-indigo-400/20 bg-[#080a12] transition-transform duration-500 group-hover:-translate-y-1">
          <div className="flex h-5 items-center gap-1 border-b border-white/[0.06] px-2">
            <span className="h-1 w-1 rounded-full bg-indigo-300/50" />
            <span className="h-1 w-1 rounded-full bg-white/15" />
            <span className="h-1 w-1 rounded-full bg-white/15" />
          </div>
          <div className="grid h-[calc(100%-1.25rem)] grid-cols-[28px_1fr]">
            <div className="border-r border-white/[0.06] p-2"><span className="block h-3 rounded bg-indigo-400/15" /></div>
            <div className="grid grid-cols-2 gap-2 p-2">
              <span className="col-span-2 rounded bg-indigo-400/10" />
              <span className="rounded border border-white/[0.06]" />
              <span className="rounded border border-white/[0.06]" />
            </div>
          </div>
        </div>
      )}

      {serviceKey === "seo" && (
        <div className="absolute inset-x-5 bottom-4 top-10">
          <div className="flex h-8 items-center gap-2 rounded-lg border border-emerald-400/15 bg-emerald-500/[0.05] px-3">
            <Icon className="h-3.5 w-3.5 text-emerald-300" />
            <span className="h-1.5 flex-1 rounded-full bg-white/10" />
          </div>
          <div className="absolute inset-x-2 bottom-0 top-11 flex items-end justify-between gap-2">
            {[35, 52, 44, 72, 92].map((height, index) => (
              <span
                key={height}
                className="flex-1 rounded-t-sm bg-gradient-to-t from-emerald-500/15 to-emerald-300/55 transition-[height] duration-500 group-hover:h-full"
                style={{ height: `${height}%`, transitionDelay: `${index * 35}ms` }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
