import type { Metadata } from "next";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, AudioLines, Check, MessageCircle, Sparkles, Compass, BookOpen } from "lucide-react";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";
import TrackedLink from "../../components/TrackedLink";
import { siteConfig } from "../../lib/seo";
import "./kira-product.css";

const description = "Meet Kira, Kindforth’s conversational AI assistant. Explore voice and text conversations, business information, and visitor guidance. Request a personal demo.";
export const metadata: Metadata = {
  title: "Kira — A more human way to connect",
  description,
  alternates: { canonical: "/kira" },
  openGraph: { title: "Meet Kira | Kindforth", description, url: "/kira" },
  twitter: { card: "summary_large_image", title: "Meet Kira | Kindforth", description },
};

const features = [
  { icon: AudioLines, number: "01", title: "A conversation that feels natural.", body: "Speak out loud or type a question. Kira brings voice and text together in one approachable AI experience." },
  { icon: BookOpen, number: "02", title: "Your business. In her words.", body: "Give visitors a clearer understanding of your services through answers grounded in the business information you provide." },
  { icon: Compass, number: "03", title: "A helpful next step.", body: "From exploring a service to finding the right contact option, Kira helps visitors move from curiosity to a conversation with your team." },
];

const faqs = [
  ["What is Kira?", "Kira is a conversational AI assistant developed by Kindforth. She combines an avatar experience with voice and text to help visitors explore business information and find their next step."],
  ["Can I try Kira on this page?", "Kira is currently available through a guided demo. Send us a request below and our team will get in touch to arrange a walkthrough and answer your questions."],
  ["Could Kira work for my business?", "That is what the demo helps us explore. We will discuss your audience, the questions they ask, and the information you want Kira to explain. The setup and scope are agreed with you before any implementation."],
  ["Can Kira make bookings or take actions?", "The current experience focuses on answering questions and guiding visitors to contact options. Bookings, integrations, and other actions would need a separate scope discussion; they are not included in the current showcase."],
  ["How much does Kira cost?", "Pricing depends on your setup, usage, and requirements. Request a demo to discuss the right scope and receive a tailored proposal."],
];

function DemoLink({ placement, children = "Request a demo" }: { placement: string; children?: React.ReactNode }) {
  return <TrackedLink href="#request-demo" eventName="primary_cta_click" eventData={{ placement, product: "kira" }} className="kira-button">{children}<ArrowUpRight size={18} aria-hidden="true" /></TrackedLink>;
}

export default function KiraPage() {
  return (
    <main className="kira-product">
      <section className="kira-hero kira-wrap" aria-labelledby="kira-title">
        <div className="kira-hero-copy">
          <p className="kira-eyebrow"><span /> INTRODUCING KIRA <span className="kira-byline">BY KINDFORTH</span></p>
          <h1 id="kira-title">A more human<br />way to <em>connect.</em></h1>
          <p className="kira-lead">Meet Kira. An AI assistant with a voice, a presence, and a purpose: helping people get to know your business.</p>
          <div className="kira-hero-actions"><DemoLink placement="kira_hero" /><a href="#meet-kira" className="kira-text-link">Explore Kira <ArrowDown size={16} aria-hidden="true" /></a></div>
          <p className="kira-small">Personal walkthroughs. Real conversations. Built around your business.</p>
        </div>
        <div className="kira-art">
          <Image src="/kira-portrait.png" alt="Kira, Kindforth’s AI assistant, in a violet-lit portrait wearing a purple blazer" fill priority sizes="(max-width: 640px) 100vw, (max-width: 1200px) 46vw, 520px" className="kira-portrait" />
          <div className="kira-art-name">kira<span>AI, WITH A PERSONAL TOUCH.</span></div>
          <div className="kira-art-tag">A Kindforth product</div>
        </div>
      </section>

      <div className="kira-capability-strip"><div className="kira-wrap"><span><AudioLines size={18} /> Voice & text</span><span><MessageCircle size={18} /> Conversational AI</span><span><BookOpen size={18} /> Business knowledge</span><span><Compass size={18} /> Visitor guidance</span></div></div>

      <section id="meet-kira" className="kira-wrap kira-section">
        <div className="kira-section-heading"><p className="kira-eyebrow">LESS SEARCHING. MORE UNDERSTANDING.</p><h2>Your visitors have questions.<br /><span>Give them a conversation.</span></h2><p>Make discovering your business feel a little less like browsing, and a little more like being welcomed.</p></div>
        <div className="kira-features">{features.map(({ icon: Icon, number, title, body }) => <article key={number}><div className="kira-feature-top"><Icon size={25} strokeWidth={1.5} aria-hidden="true" /><span>{number}</span></div><h3>{title}</h3><p>{body}</p></article>)}</div>
      </section>

      <section className="kira-showcase kira-wrap" aria-labelledby="showcase-heading">
        <div className="kira-showcase-copy"><p className="kira-eyebrow">A LITTLE PREVIEW</p><h2 id="showcase-heading">From “just looking”<br />to <em>“tell me more.”</em></h2><p>A visitor should not need to know where to look before they can ask a question. Kira offers a conversational starting point.</p><ul>{["Explain services in everyday language", "Help visitors explore what is relevant", "Point people towards your team"].map(text => <li key={text}><Check size={17} aria-hidden="true" />{text}</li>)}</ul><DemoLink placement="kira_preview">See Kira in a demo</DemoLink></div>
        <div className="kira-conversation"><div className="kira-conversation-header"><span className="kira-avatar-mark"><Sparkles size={22} /></span><div><strong>Kira</strong><span>Your AI guide</span></div><span className="kira-example-label">EXAMPLE</span></div><div className="kira-messages"><p className="kira-message-visitor">I’m exploring AI for my business. Where do I start?</p><div className="kira-message-assistant"><span>KIRA</span><p>A good place to start is the questions your customers ask most often. An AI assistant can help explain your services and guide visitors to the right information.</p></div><p className="kira-message-visitor">Can I see how that would work?</p><div className="kira-message-assistant"><span>KIRA</span><p>Of course. You can request a demo with the Kindforth team to explore the experience and discuss your business.</p></div></div><p className="kira-example-note">Illustrative conversation · Live demonstrations available on request</p></div>
      </section>

      <section className="kira-wrap kira-section kira-demo-outline"><div><p className="kira-eyebrow">MADE PERSONAL</p><h2>See the experience.<br /><span>Explore the possibilities.</span></h2><p>A guided demo gives you room to ask questions and work out where Kira could fit.</p></div><ol>{[["Meet Kira", "See the avatar, voice, and text experience in a guided walkthrough."], ["Talk about your business", "Explore your visitors’ questions, your content, and the experience you want to create."], ["Find your next step", "Discuss what a setup could involve, with a scope and proposal tailored to your needs."]].map(([title, body], index) => <li key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{body}</p></div></li>)}</ol></section>

      <section className="kira-wrap kira-faq kira-section"><div><p className="kira-eyebrow">GOOD QUESTIONS</p><h2>A little more<br />about Kira.</h2></div><div>{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></section>

      <section id="request-demo" className="kira-wrap kira-request kira-section" aria-labelledby="demo-heading"><div><p className="kira-eyebrow">MEET YOUR NEXT CONVERSATION</p><h2 id="demo-heading">Curious?<br /><em>Let’s introduce you.</em></h2><p>Tell us a little about your business. We’ll get in touch to arrange your Kira demo and explore what you have in mind.</p><a href={`mailto:${siteConfig.email}?subject=Kira%20demo%20request`} className="kira-text-link">Prefer email? {siteConfig.email} <ArrowUpRight size={16} aria-hidden="true" /></a></div><div className="kira-form"><h3>Request your Kira demo</h3><p>Our team will follow up to arrange a time.</p><ContactForm initialService="ai-development" intent="kira-demo" /></div></section>
      <Footer />
    </main>
  );
}
