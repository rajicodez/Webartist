import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="text-center max-w-xl">
        <p className="text-blue-400 font-mono uppercase tracking-widest mb-4">404</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6">This page moved or never existed.</h1>
        <p className="text-gray-400 text-lg mb-10">
          Explore Kindforth&apos;s AI engineering services or return to the homepage.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/" className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 font-bold">Home</Link>
          <Link href="/services" className="px-6 py-3 rounded-full border border-white/15 hover:bg-white/10 font-bold">Services</Link>
        </div>
      </div>
    </main>
  );
}
