import { ArrowRight, BrainCircuit, Globe2, Users } from "lucide-react";
import Footer from "../../components/Footer";
import { siteConfig } from "../../lib/seo";

const values = [
  { icon: BrainCircuit, title: "Learn by building", description: "Work on real AI, automation, software, and growth challenges with room to explore better approaches." },
  { icon: Users, title: "Small-team impact", description: "Early team members will work closely with the founders and have a visible influence on how Kindforth grows." },
  { icon: Globe2, title: "Sri Lankan roots", description: "Build technology for ambitious local companies while contributing to projects that can reach international markets." },
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <section className="relative overflow-hidden px-6 pb-24 pt-36 md:pb-32 md:pt-48">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[850px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-[130px]" />
        <div className="relative mx-auto max-w-5xl text-center">
          <p className="mb-5 font-mono text-sm uppercase tracking-[0.2em] text-blue-300">Careers at Kindforth</p>
          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">Help us engineer what comes next</h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
            We are growing carefully as client work expands. We do not have an open position today, but we expect to add to the team in the future.
          </p>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-3">
            {values.map(({ icon: Icon, title, description }) => (
              <article key={title} className="rounded-3xl border border-white/10 bg-black/30 p-7">
                <Icon className="h-7 w-7 text-blue-400" aria-hidden="true" />
                <h2 className="mt-7 text-xl font-bold">{title}</h2>
                <p className="mt-3 leading-relaxed text-gray-400">{description}</p>
              </article>
            ))}
          </div>

          <div className="mt-16 rounded-3xl border border-blue-500/20 bg-blue-500/10 p-8 text-center md:p-12">
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-blue-300">No current openings</p>
            <h2 className="mt-4 text-3xl font-bold">We will publish real roles here when we are ready to hire.</h2>
            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-gray-300">
              Follow Kindforth for company updates, or introduce yourself by email if you would like us to keep your details in mind for a future opportunity.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-black hover:bg-blue-100">
                Follow on LinkedIn
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href={`mailto:${siteConfig.email}?subject=Future%20career%20opportunities`} className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold hover:bg-white/10">
                Introduce yourself
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
