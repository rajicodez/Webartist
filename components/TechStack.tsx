"use client";

const technologies = [
  { name: "Python", logo: "https://cdn.simpleicons.org/python" },
  { name: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs/white" },
  { name: "React", logo: "https://cdn.simpleicons.org/react" },
  { name: "Tailwind", logo: "https://cdn.simpleicons.org/tailwindcss" },
  { name: "OpenAI", logo: "https://cdn.simpleicons.org/openai/white" },
  { name: "Analytics", logo: "https://cdn.simpleicons.org/googleanalytics" }, 
  { name: "LangChain", logo: "https://cdn.simpleicons.org/langchain" },
  { name: "Supabase", logo: "https://cdn.simpleicons.org/supabase" },
  { name: "TensorFlow", logo: "https://cdn.simpleicons.org/tensorflow" },
  { name: "Render", logo: "https://cdn.simpleicons.org/render/white" },
  { name: "Hadoop", logo: "https://cdn.simpleicons.org/apachehadoop" }, 
  { name: "Firebase", logo: "https://cdn.simpleicons.org/firebase" }, 
];

export default function TechStack() {
  return (
    <section className="py-10 md:py-20 bg-black overflow-hidden border-y border-white/5">
      
      <div className="text-center mb-10">
        <p className="text-sm font-mono text-gray-500 uppercase tracking-widest">
          Powered by Modern Infrastructure
        </p>
      </div>

      {/* Row 1: Moving Left */}
      <div className="relative flex overflow-hidden group">
        <div className="flex animate-marquee whitespace-nowrap gap-16 items-center">
          {[...technologies, ...technologies].map((tech, index) => (
            <div key={index} className="flex items-center gap-4 group/item cursor-default">
              
              {/* The Logo Image */}
              <div className="relative w-12 h-12 grayscale opacity-50 group-hover/item:grayscale-0 group-hover/item:opacity-100 transition-all duration-300">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={tech.logo} 
                  alt={tech.name} 
                  className="w-full h-full object-contain" 
                />
              </div>

              {/* Text (Optional - remove if you just want logos) */}
              <span className="text-xl font-bold text-gray-700 group-hover/item:text-white transition-colors">
                {tech.name}
              </span>

            </div>
          ))}
        </div>
      </div>

    </section>
  );
}