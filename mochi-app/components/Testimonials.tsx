interface TestimonialCardProps {
  quote: string;
  name: string;
  location: string;
}

function TestimonialCard({ quote, name, location }: TestimonialCardProps) {
  return (
    <figure
      className="bg-bg-surface rounded-2xl p-6 flex flex-col gap-5"
      role="article"
    >
      <blockquote>
        <p className="text-base text-text-primary leading-[1.7]">
          &ldquo;{quote}&rdquo;
        </p>
      </blockquote>
      <figcaption className="text-caption text-text-secondary mt-auto">
        {name}, {location}
      </figcaption>
    </figure>
  );
}

const testimonials: TestimonialCardProps[] = [
  {
    quote:
      "Switched from clay six months ago. The dust difference alone was worth it. My cat took to it immediately.",
    name: "Sarah M.",
    location: "San Francisco",
  },
  {
    quote:
      "I was skeptical. Now I tell everyone. It actually clumps better than the brand I used for years.",
    name: "James T.",
    location: "Brooklyn",
  },
  {
    quote:
      "Finally a litter brand that doesn't feel like it was designed in 1987. mochi just works.",
    name: "Priya K.",
    location: "Austin",
  },
];

export default function Testimonials() {
  return (
    <section
      className="bg-white py-28 px-5"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto" style={{ maxWidth: "980px" }}>
        {/* Section header */}
        <div className="mb-14">
          <p className="text-caption font-normal text-text-secondary uppercase tracking-widest mb-6">
            what cat owners say
          </p>
          <h2
            id="testimonials-heading"
            className="text-h2 md:text-h1 font-semibold text-text-primary tracking-tight"
          >
            they noticed. so did their cats.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
