import type { ServiceKey } from "./services";

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  services?: ServiceKey[];
  result?: string;
  image?: string;
  imageAlt?: string;
  portraits?: Array<{
    src: string;
    alt: string;
    name: string;
    position?: string;
  }>;
  projectHref?: string;
  caseStudyHref?: string;
  tags?: string[];
  featured?: boolean;
};

// Add only approved, attributable client testimonials here. The section remains
// hidden until real testimonials are supplied, so placeholder claims never ship.
export const testimonials: Testimonial[] = [
  {
    quote:
      "Kindforth went above and beyond what we expected. They built our website and interactive games that give our audience more ways to engage with Yellow Flag. We highly recommend them and will definitely work with Kindforth again.",
    name: "Lakindu Siriwadana & Kasun Udayangana",
    role: "Content Creators",
    company: "Yellow Flag Podcast",
    services: ["web-application-development", "custom-software-development"],
    result: "Website and interactive fan games live in production",
    image: "/yellowflag.png",
    imageAlt: "Yellow Flag Podcast website and interactive fan experience",
    portraits: [
      {
        src: "/testimonials/lakindu.jpg",
        alt: "Lakindu Siriwadana, content creator at Yellow Flag Podcast",
        name: "Lakindu",
        position: "center",
      },
      {
        src: "/testimonials/kasun.jpg",
        alt: "Kasun Udayangana, content creator at Yellow Flag Podcast",
        name: "Kasun",
        position: "center",
      },
    ],
    projectHref: "https://yellowflagpodcast.com",
    caseStudyHref: "/work#yellow-flag",
    tags: ["Web Platform", "Interactive Games", "Audience Engagement"],
    featured: true,
  },
];
