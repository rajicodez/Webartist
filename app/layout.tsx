import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { Analytics } from '@vercel/analytics/next';
import ChatWidget from "../components/ChatWidget";
import { GoogleTagManager } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const outfit = Outfit({ subsets: ["latin"], variable: '--font-outfit' });

export const metadata: Metadata = {
  title: "WebArtist | Intelligent Web Platforms",
  description: "We build data-driven websites powered by AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <GoogleTagManager gtmId="GTM-NFBHX3DG" />
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased`} suppressHydrationWarning>
        <Navbar />
        {children}
        <ChatWidget />
        <Analytics />
      </body>
    </html>
  );
}