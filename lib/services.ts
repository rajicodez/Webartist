export type ServiceKey =
  | "ai-development"
  | "business-automation"
  | "custom-software-development"
  | "web-application-development"
  | "seo";

export type ServiceCapability = {
  title: string;
  description: string;
};

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServicePageData = {
  key: ServiceKey;
  navLabel: string;
  title: string;
  metaTitle: string;
  description: string;
  eyebrow: string;
  introduction: string;
  href: string;
  cta: string;
  outcomes: string[];
  capabilities: ServiceCapability[];
  idealFor: string[];
  faqs: ServiceFaq[];
};

export const servicePages: Record<ServiceKey, ServicePageData> = {
  "ai-development": {
    key: "ai-development",
    navLabel: "AI Development",
    title: "AI Development Company in Sri Lanka",
    metaTitle: "AI Development Company in Sri Lanka",
    description:
      "Custom AI development for Sri Lankan SMEs and growing companies, including generative AI, machine learning, deep learning, computer vision, NLP, and production deployment.",
    eyebrow: "Custom AI engineering",
    introduction:
      "Kindforth designs and builds production-ready AI systems around real business problems. From intelligent assistants to computer vision and predictive models, we help Sri Lankan companies move from an idea or dataset to a secure system their teams can use.",
    href: "/services/ai-development",
    cta: "Discuss an AI project",
    outcomes: [
      "Turn company knowledge and data into useful decision-making tools.",
      "Reduce repetitive work without removing the human oversight that matters.",
      "Create new AI-enabled products, customer experiences, and revenue opportunities.",
    ],
    capabilities: [
      {
        title: "Generative AI and LLM applications",
        description:
          "Secure assistants, content systems, copilots, and conversational applications built around your workflows and data.",
      },
      {
        title: "AI agents and RAG systems",
        description:
          "Agents that retrieve trusted company knowledge, use business tools, and complete controlled multi-step tasks.",
      },
      {
        title: "Machine learning",
        description:
          "Classification, recommendation, forecasting, anomaly detection, and predictive models trained for your use case.",
      },
      {
        title: "Deep learning",
        description:
          "Neural network solutions for complex image, language, audio, and high-dimensional data problems.",
      },
      {
        title: "Computer vision",
        description:
          "Image and video analysis for detection, inspection, monitoring, recognition, and operational intelligence.",
      },
      {
        title: "Natural language processing",
        description:
          "Document extraction, multilingual text processing, semantic search, summarization, and sentiment analysis.",
      },
      {
        title: "Model deployment and MLOps",
        description:
          "Reliable APIs, cloud deployment, monitoring, evaluation, security, and continuous model improvement.",
      },
      {
        title: "AI discovery and prototyping",
        description:
          "Fast feasibility work to validate data, risk, cost, and expected value before a larger investment.",
      },
    ],
    idealFor: [
      "SMEs with valuable data or knowledge trapped across documents and systems",
      "Companies planning an AI-enabled product or customer experience",
      "Operations teams that need prediction, inspection, or faster decisions",
      "Businesses that need a practical AI roadmap before committing to development",
    ],
    faqs: [
      {
        question: "Does AI development include machine learning and deep learning?",
        answer:
          "Yes. Our AI development work includes machine learning, deep learning, generative AI, computer vision, natural language processing, predictive analytics, and the engineering required to deploy those systems reliably.",
      },
      {
        question: "Can Kindforth build an AI system using our company data?",
        answer:
          "Yes. We first assess the quality, sensitivity, and suitability of your data, then recommend an approach such as retrieval-augmented generation, custom machine learning, fine-tuning, or a hybrid system.",
      },
      {
        question: "Do you work with Sri Lankan SMEs?",
        answer:
          "Yes. Sri Lankan SMEs and growing companies are our primary focus. We scope projects in practical phases so a business can validate value before investing in a larger rollout.",
      },
      {
        question: "Can you take an AI prototype into production?",
        answer:
          "Yes. We handle application engineering, integrations, model evaluation, deployment, monitoring, access control, and ongoing improvement—not only the initial model or demonstration.",
      },
    ],
  },
  "business-automation": {
    key: "business-automation",
    navLabel: "Business Automation",
    title: "Business Automation Services in Sri Lanka",
    metaTitle: "Business Automation Services in Sri Lanka",
    description:
      "Business process and workflow automation for Sri Lankan SMEs. Connect tools, reduce manual work, process documents, and improve operational visibility.",
    eyebrow: "Smarter daily operations",
    introduction:
      "We identify repetitive, error-prone work and replace it with dependable workflows that connect your people, data, and existing software. The result is faster operations without forcing your company into an oversized enterprise system.",
    href: "/services/business-automation",
    cta: "Find automation opportunities",
    outcomes: [
      "Give teams back time currently lost to copying, checking, and following up.",
      "Reduce operational errors and make every process easier to track.",
      "Scale customer and back-office work without matching every increase with headcount.",
    ],
    capabilities: [
      { title: "Workflow automation", description: "Approvals, assignments, alerts, handovers, and recurring operational processes." },
      { title: "AI-powered automation", description: "Workflows that understand text, classify requests, summarize information, and recommend next actions." },
      { title: "Document intelligence", description: "Extract and validate information from invoices, forms, contracts, PDFs, and scanned documents." },
      { title: "System integrations", description: "Connect CRM, ERP, accounting, email, spreadsheets, databases, and internal applications." },
      { title: "Customer service automation", description: "Route enquiries, answer common questions, book appointments, and escalate important conversations." },
      { title: "Reporting automation", description: "Create timely dashboards, scheduled reports, alerts, and management summaries from multiple systems." },
    ],
    idealFor: [
      "Teams relying on spreadsheets, email, and repeated data entry",
      "Growing SMEs whose processes no longer scale reliably",
      "Operations with frequent delays, errors, or missing visibility",
      "Companies that want to improve existing tools rather than replace everything",
    ],
    faqs: [
      { question: "What business processes can be automated?", answer: "Common candidates include lead handling, document processing, approvals, reporting, customer support, appointment booking, data synchronization, inventory alerts, and recurring administrative work." },
      { question: "Do we need to replace our current software?", answer: "Usually not. We first look for ways to connect and improve the systems you already use. Replacement is recommended only when an existing tool creates a fundamental limitation." },
      { question: "How do you choose what to automate first?", answer: "We assess frequency, time spent, error rate, business impact, technical feasibility, and risk. The best first automation is usually valuable, measurable, and narrow enough to deploy quickly." },
      { question: "Will automation remove human control?", answer: "No. We design approval points, exception handling, audit trails, and escalation rules wherever human judgment or accountability is important." },
    ],
  },
  "custom-software-development": {
    key: "custom-software-development",
    navLabel: "Custom Software",
    title: "Custom Software Development in Sri Lanka",
    metaTitle: "Custom Software Development Company in Sri Lanka",
    description:
      "Custom software development for Sri Lankan SMEs, from product discovery and SaaS platforms to internal systems, APIs, integrations, and cloud deployment.",
    eyebrow: "Software built around your business",
    introduction:
      "When off-the-shelf tools cannot support the way your company works, Kindforth builds software around your real processes. We take projects from discovery and architecture through development, launch, and continuous improvement.",
    href: "/services/custom-software-development",
    cta: "Plan your software project",
    outcomes: [
      "Own a system designed for your workflow instead of adapting to generic software.",
      "Connect fragmented operations through one reliable product and data model.",
      "Launch a scalable digital product with a clear path for future development.",
    ],
    capabilities: [
      { title: "SaaS product development", description: "Multi-tenant platforms, subscriptions, administration, onboarding, and product analytics." },
      { title: "Internal business systems", description: "Purpose-built tools for operations, finance, sales, service delivery, and management." },
      { title: "API and integration development", description: "Reliable connections between your applications, partners, data sources, and third-party services." },
      { title: "Cloud architecture", description: "Secure, scalable infrastructure designed around traffic, data, availability, and cost requirements." },
      { title: "Legacy modernization", description: "Incremental replacement or improvement of outdated systems without unnecessary operational disruption." },
      { title: "Product discovery", description: "Requirements, user journeys, prototypes, technical decisions, and a practical delivery roadmap." },
    ],
    idealFor: [
      "SMEs that have outgrown spreadsheets or generic subscription tools",
      "Founders developing a new software product",
      "Companies that need multiple systems to work together",
      "Organizations modernizing an important legacy application",
    ],
    faqs: [
      { question: "When should a company choose custom software?", answer: "Custom software makes sense when a process creates competitive value, existing products require too many compromises, integrations are critical, or recurring inefficiency justifies owning a tailored system." },
      { question: "Can you start with an MVP?", answer: "Yes. We normally recommend defining the smallest version that can validate the core workflow or commercial assumption, then expanding it using real user feedback." },
      { question: "Who owns the software and source code?", answer: "Ownership and licensing are defined clearly in the project agreement. For standard custom development engagements, clients receive the agreed source code and deliverables after payment milestones are completed." },
      { question: "Do you provide maintenance after launch?", answer: "Yes. We can provide monitoring, fixes, security updates, infrastructure support, and planned product development after launch." },
    ],
  },
  "web-application-development": {
    key: "web-application-development",
    navLabel: "Web Applications",
    title: "Web Application Development in Sri Lanka",
    metaTitle: "Web Application Development Company in Sri Lanka",
    description:
      "High-performance web application development for Sri Lankan businesses, including portals, dashboards, SaaS products, booking platforms, and real-time applications.",
    eyebrow: "Fast, reliable digital products",
    introduction:
      "We build secure browser-based applications that make complex tasks feel simple. Kindforth combines product thinking, interface design, modern engineering, and performance optimization from the beginning.",
    href: "/services/web-application-development",
    cta: "Build a web application",
    outcomes: [
      "Give customers and teams a fast, clear experience on every device.",
      "Replace disconnected forms and spreadsheets with one accessible platform.",
      "Launch a maintainable application that can evolve with the business.",
    ],
    capabilities: [
      { title: "Customer and employee portals", description: "Secure self-service experiences for customers, partners, staff, and administrators." },
      { title: "Dashboards and analytics", description: "Operational and management views that turn complex data into clear actions." },
      { title: "Booking and commerce platforms", description: "Custom purchasing, scheduling, availability, payment, and fulfilment experiences." },
      { title: "Progressive web applications", description: "Responsive web products with app-like performance and selected offline capabilities." },
      { title: "Real-time applications", description: "Live collaboration, tracking, notifications, streaming updates, and event-driven interfaces." },
      { title: "Performance and accessibility", description: "Fast loading, responsive interaction, semantic interfaces, and inclusive user journeys." },
    ],
    idealFor: [
      "Companies launching a portal, dashboard, marketplace, or SaaS application",
      "Businesses replacing manual customer or employee processes",
      "Teams whose existing web application is slow or difficult to maintain",
      "Organizations that need an application integrated with internal systems",
    ],
    faqs: [
      { question: "What is the difference between a website and a web application?", answer: "A website mainly presents information. A web application lets users complete workflows such as managing accounts, submitting data, collaborating, booking, purchasing, or analyzing business information." },
      { question: "Can you improve an existing web application?", answer: "Yes. We can assess the architecture, performance, usability, accessibility, and maintainability of an existing product, then improve it incrementally or plan a controlled rebuild." },
      { question: "Do your applications work on mobile devices?", answer: "Yes. Responsive behavior is designed and tested as part of the product, and we can recommend a progressive web app or separate mobile application when the use case requires it." },
      { question: "Can the application connect to our other systems?", answer: "Yes. We build APIs and integrations for payment providers, CRM and ERP systems, messaging platforms, identity providers, analytics tools, and custom internal software." },
    ],
  },
  seo: {
    key: "seo",
    navLabel: "SEO & Organic Growth",
    title: "SEO Services in Sri Lanka",
    metaTitle: "SEO Services in Sri Lanka",
    description:
      "SEO services for Sri Lankan SMEs covering technical SEO, content strategy, local search, on-page optimization, analytics, and visibility in AI-powered search.",
    eyebrow: "Sustainable organic growth",
    introduction:
      "Kindforth helps Sri Lankan companies build search visibility that leads to useful enquiries, not vanity reports. We combine technical engineering, search-focused content, local relevance, and conversion measurement in one practical growth program.",
    href: "/services/seo",
    cta: "Request an SEO assessment",
    outcomes: [
      "Increase qualified visibility for the problems and services your customers search for.",
      "Fix technical barriers that prevent search engines from understanding and trusting the site.",
      "Turn organic visits into measurable enquiries, calls, and commercial opportunities.",
    ],
    capabilities: [
      { title: "Technical SEO", description: "Crawlability, indexing, structured data, site architecture, performance, migrations, and technical quality." },
      { title: "Keyword and content strategy", description: "Search-intent research, page mapping, content briefs, topic clusters, and prioritization." },
      { title: "On-page SEO", description: "Titles, headings, copy, internal links, media, entities, and page-level relevance improvements." },
      { title: "Local SEO", description: "Sri Lankan geographic relevance, business profiles, citations, reviews, and local landing experiences." },
      { title: "AI search visibility", description: "Clear entities, structured answers, source-worthy content, and visibility across emerging answer engines." },
      { title: "Analytics and conversion", description: "Search Console, analytics, lead events, reporting, and improvements based on business outcomes." },
    ],
    idealFor: [
      "Sri Lankan SMEs that rely too heavily on referrals or paid advertising",
      "Companies launching or rebuilding a website",
      "Businesses with traffic but too few qualified enquiries",
      "Teams that need technical and content SEO working together",
    ],
    faqs: [
      { question: "How long does SEO take in Sri Lanka?", answer: "Technical fixes can be completed quickly, but meaningful ranking and traffic growth usually develops over several months. Timing depends on competition, the site's history, content quality, and authority." },
      { question: "Can you guarantee a number-one Google ranking?", answer: "No responsible SEO company can guarantee a specific organic ranking. We provide a transparent plan, measurable implementation, and reporting tied to qualified visibility and conversions." },
      { question: "Does SEO include content creation?", answer: "It can. We can provide research, content architecture, briefs, editing, optimization, and production depending on the engagement and subject-matter access available." },
      { question: "Do you optimize for AI search tools as well as Google?", answer: "Yes. Strong technical foundations, clear entities, structured information, expert evidence, and useful original content support both traditional search and AI-powered discovery." },
    ],
  },
};

export const serviceLinks = Object.values(servicePages).map(({ key, navLabel, href, description }) => ({
  key,
  label: navLabel,
  href,
  description,
}));

