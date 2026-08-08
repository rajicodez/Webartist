import type { Metadata } from "next";

export const siteConfig = {
  name: "Kindforth",
  url: "https://www.kindforth.com",
  email: "hello@kindforth.com",
  phone: "+94717802777",
  displayPhone: "+94 71 780 2777",
  description:
    "Kindforth helps Sri Lankan SMEs grow with AI development, business automation, custom software, web applications, and SEO, with international delivery available.",
  social: {
    linkedin: "https://www.linkedin.com/company/kindforth/",
    instagram: "https://www.instagram.com/kindforth/",
    facebook: "https://www.facebook.com/share/1DLNEwfB9n/",
  },
} as const;

type MetadataOptions = {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
  absoluteTitle?: boolean;
};

export function createMetadata({
  title,
  description,
  path,
  noIndex = false,
  absoluteTitle = false,
}: MetadataOptions): Metadata {
  return {
    title: absoluteTitle ? { absolute: `${title} | ${siteConfig.name}` } : title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url: path,
      siteName: siteConfig.name,
      locale: "en_LK",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
    },
    robots: noIndex
      ? {
          index: false,
          follow: true,
          googleBot: { index: false, follow: true },
        }
      : {
          index: true,
          follow: true,
        },
  };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/icon.png`,
      },
      description: siteConfig.description,
      email: siteConfig.email,
      telephone: siteConfig.phone,
      areaServed: [
        { "@type": "Country", name: "Sri Lanka" },
        "International",
      ],
      founder: [
        { "@type": "Person", name: "Rajindra Ratnayake" },
        { "@type": "Person", name: "Nipun Nirmal" },
      ],
      sameAs: Object.values(siteConfig.social),
      knowsAbout: [
        "Artificial Intelligence",
        "Machine Learning",
        "Deep Learning",
        "Computer Vision",
        "Business Process Automation",
        "Custom Software Development",
        "Web Application Development",
        "Search Engine Optimization",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.description,
      publisher: { "@id": `${siteConfig.url}/#organization` },
      inLanguage: "en",
    },
  ],
};
