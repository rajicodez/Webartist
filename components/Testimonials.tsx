import { Quote } from "lucide-react";
import { testimonials } from "../lib/testimonials";

type TestimonialsProps = {
  heading?: string;
};

export default function Testimonials({ heading = "Trusted by teams building what is next" }: TestimonialsProps) {
  if (testimonials.length === 0) return null;

  return (
    <section className="border-y border-white/10 bg-white/[0.03] py-24" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-blue-400">Client feedback</p>
        <h2 id="testimonials-heading" className="max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl">
          {heading}
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure key={`${testimonial.company}-${testimonial.name}`} className="flex h-full flex-col rounded-3xl border border-white/10 bg-black/40 p-7">
              <Quote className="mb-6 h-7 w-7 text-blue-400" aria-hidden="true" />
              <blockquote className="flex-1 text-lg leading-relaxed text-gray-200">
                “{testimonial.quote}”
              </blockquote>
              {testimonial.result && (
                <p className="mt-6 rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
                  {testimonial.result}
                </p>
              )}
              <figcaption className="mt-6 border-t border-white/10 pt-5">
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="mt-1 text-sm text-gray-400">
                  {testimonial.role}, {testimonial.company}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

