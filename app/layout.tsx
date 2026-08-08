import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { Analytics } from '@vercel/analytics/next';
import FloatingWhatsAppButton from "../components/FloatingWhatsAppButton";
import { GoogleTagManager } from '@next/third-parties/google'
import { organizationSchema, siteConfig } from "../lib/seo";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const outfit = Outfit({ subsets: ["latin"], variable: '--font-outfit' });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "AI, Automation & Software Company in Sri Lanka | Kindforth",
    template: "%s | Kindforth",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    title: "AI, Automation & Software Company in Sri Lanka | Kindforth",
    description: siteConfig.description,
    url: "/",
    siteName: siteConfig.name,
    locale: "en_LK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI, Automation & Software Company in Sri Lanka | Kindforth",
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
          }}
        />
        <Navbar />
        {children}
        <FloatingWhatsAppButton />
        <Analytics />
      </body>
    </html>
  );
}
