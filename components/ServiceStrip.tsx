"use client";
import { MessageSquare, Eye, BarChart3, Globe } from "lucide-react";

const services = [
  {
    icon: <MessageSquare size={24} />,
    title: "AI Chatbots & Agents",
    desc: "Customer support bots that answer 24/7 and book appointments."
  },
  {
    icon: <Eye size={24} />,
    title: "Computer Vision",
    desc: "Cameras that detect objects, faces, or defects automatically."
  },
  {
    icon: <Globe size={24} />,
    title: "Intelligent Websites",
    desc: "Modern websites that change content based on who is visiting."
  },
  {
    icon: <BarChart3 size={24} />,
    title: "Business Automation",
    desc: "Connecting your emails, Excel, and CRM to run on autopilot."
  }
];

export default function ServiceStrip() {
  return (
    <section className="bg-white/5 border-y border-white/10 py-12 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div key={i} className="flex flex-col gap-3 group">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {s.icon}
              </div>
              <h3 className="text-lg font-bold text-white">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}