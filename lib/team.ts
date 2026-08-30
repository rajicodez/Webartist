import { siteConfig } from "./seo";

export const founders = [
  {
    slug: "rajindra-ratnayake",
    name: "Rajindra Ratnayake",
    role: "Co-Founder & Head of Data & AI",
    image: "/rajindra5.png",
    bio: "Rajindra leads Kindforth's AI, data, and backend engineering. His work covers machine learning, generative AI, computer vision, analytics, system architecture, and turning business data into dependable production systems.",
    responsibilities: ["AI and machine-learning architecture", "Data engineering and analytics", "Backend systems and technical delivery"],
    expertise: ["Artificial Intelligence", "Machine Learning", "Generative AI", "Computer Vision", "Data Engineering", "Python"],
    projects: ["Gomez Hospital", "Yellow Flag Podcast", "Call Me Taxi"],
    linkedin: "https://www.linkedin.com/in/rajindra-ratnayake-70ab1b193",
    github: "https://github.com/rajicodez",
  },
  {
    slug: "nipun-nirmal",
    name: "Nipun Nirmal",
    role: "Co-Founder & Head of Product Design",
    image: "/nipun.jpg",
    bio: "Nipun leads product thinking, interface design, and frontend engineering at Kindforth. He turns complex operational requirements into clear user journeys and fast, accessible web experiences.",
    responsibilities: ["Product discovery and user journeys", "UI/UX and design systems", "Frontend architecture and performance"],
    expertise: ["Product Design", "User Experience", "Frontend Engineering", "Next.js", "Web Accessibility", "Performance"],
    projects: ["Yellow Flag Podcast", "Sathimath Viweka Senasuna", "Call Me Taxi"],
    linkedin: "https://www.linkedin.com/in/nipun-nirmal-6892a4202",
    github: "https://github.com/nipunnirmal21",
  },
] as const;

export function personSchema(founder: (typeof founders)[number]) {
  return {
    "@type": "Person",
    "@id": `${siteConfig.url}/team#${founder.slug}`,
    name: founder.name,
    jobTitle: founder.role,
    image: `${siteConfig.url}${founder.image}`,
    description: founder.bio,
    url: `${siteConfig.url}/team#${founder.slug}`,
    worksFor: { "@id": `${siteConfig.url}/#organization` },
    knowsAbout: founder.expertise,
    sameAs: [founder.linkedin, founder.github],
  };
}
