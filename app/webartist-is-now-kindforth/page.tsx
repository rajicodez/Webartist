import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../../components/Footer";
import { createMetadata } from "../../lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Webartist Is Now Kindforth",
  description:
    "Webartist has become Kindforth. Meet the same Sri Lankan founding team under a new name built for our expanded AI engineering mission.",
  path: "/webartist-is-now-kindforth",
});

export default function RebrandPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <article className="max-w-4xl mx-auto px-6 pt-40 pb-28">
        <p className="text-blue-400 font-mono uppercase tracking-[0.2em] mb-6">Our next chapter</p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
          Webartist is now <span className="text-blue-500">Kindforth.</span>
        </h1>
        <div className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-300 max-w-3xl">
          <p>
            We began as Webartist, focused on building modern websites. As our work expanded into AI
            chatbots, automation, computer vision, data systems, and intelligent digital products, the old
            name no longer described the company we had become.
          </p>
          <p>
            Kindforth is the new name for that wider mission. The founding team, project relationships, and
            commitment to practical engineering remain the same. We are still based in Sri Lanka and now
            serve organizations locally and internationally under one clearer identity.
          </p>
          <p>If you previously knew us as Webartist, you are in the right place.</p>
        </div>
        <div className="mt-12 flex flex-wrap gap-4">
          <Link href="/services" className="px-7 py-4 rounded-full bg-blue-600 hover:bg-blue-500 font-bold transition-colors">
            Explore our services
          </Link>
          <Link href="/contact" className="px-7 py-4 rounded-full border border-white/15 hover:bg-white/10 font-bold transition-colors">
            Talk to the team
          </Link>
        </div>
      </article>
      <Footer />
    </main>
  );
}
