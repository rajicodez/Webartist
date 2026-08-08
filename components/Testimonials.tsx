import { ArrowUpRight, Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ServiceKey } from "../lib/services";
import { testimonials } from "../lib/testimonials";

type TestimonialsProps = {
  heading?: string;
  service?: ServiceKey;
};

export default function Testimonials({
  heading = "Trusted by teams building what is next",
  service,
}: TestimonialsProps) {
  const visibleTestimonials = service
    ? testimonials.filter((testimonial) => testimonial.services?.includes(service))
    : testimonials;

  if (visibleTestimonials.length === 0) return null;

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden border-y border-white/10 bg-[#050505] py-20 scroll-mt-24"
      aria-labelledby="testimonials-heading"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-[36rem] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[110px]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <p className="mb-3 text-center font-mono text-xs uppercase tracking-[0.2em] text-blue-400">Client feedback</p>
        <h2 id="testimonials-heading" className="mx-auto max-w-3xl text-center text-3xl font-bold tracking-tight text-white md:text-4xl">
          {heading}
        </h2>

        <div className="mt-10 grid gap-5">
          {visibleTestimonials.map((testimonial) => (
            <figure
              key={`${testimonial.company}-${testimonial.name}`}
              className="mx-auto w-full max-w-5xl rounded-3xl border border-white/10 bg-white/[0.035] p-7 md:p-10"
            >
              <div className="flex items-center justify-between gap-5">
                <Quote className="h-7 w-7 text-blue-400" aria-hidden="true" />
                {testimonial.projectHref && (
                  <a
                    href={testimonial.projectHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-400 transition-colors hover:text-white"
                  >
                    Live project <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                )}
              </div>

              <blockquote className="mt-6 max-w-4xl text-xl font-medium leading-relaxed text-white md:text-2xl md:leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <figcaption className="mt-7 flex flex-col justify-between gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
                <div className="flex items-center gap-4">
                  {testimonial.portraits && (
                    <div className="flex shrink-0 -space-x-3">
                      {testimonial.portraits.map((portrait) => (
                        <div key={portrait.src} className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-[#111] bg-black">
                          <Image
                            src={portrait.src}
                            alt={portrait.alt}
                            fill
                            className="object-cover"
                            style={{ objectPosition: portrait.position ?? "center" }}
                            sizes="48px"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="mt-0.5 text-sm text-gray-400">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>

                {testimonial.caseStudyHref && (
                  <Link
                    href={testimonial.caseStudyHref}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-300 transition-colors hover:text-blue-200"
                  >
                    View the work <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
