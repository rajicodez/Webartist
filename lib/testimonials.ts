export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  service?: string;
  result?: string;
};

// Add only approved, attributable client testimonials here. The section remains
// hidden until real testimonials are supplied, so placeholder claims never ship.
export const testimonials: Testimonial[] = [];
