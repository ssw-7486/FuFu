import { Leaf, Droplets, RefreshCw } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  headline: string;
  body: string;
}

function FeatureCard({ icon: Icon, headline, body }: FeatureCardProps) {
  return (
    <div
      className="bg-white rounded-2xl p-6 transition-shadow duration-250 hover:shadow-card-hover"
      role="article"
    >
      <div className="mb-5 inline-flex">
        <Icon
          size={24}
          strokeWidth={1.5}
          className="text-brand-primary"
          aria-hidden="true"
        />
      </div>
      <h3 className="text-h3 font-medium text-text-primary mb-3 tracking-tight">
        {headline}
      </h3>
      <p className="text-base text-text-secondary leading-[1.65]">{body}</p>
    </div>
  );
}

const features: FeatureCardProps[] = [
  {
    icon: Leaf,
    headline: "food-grade ingredients",
    body: "Made from the same soy used in tofu production. No clay, no silica, no synthetic fragrances.",
  },
  {
    icon: Droplets,
    headline: "clumps on contact",
    body: "Forms tight, dry clumps in seconds. Easy to scoop. Low tracking. Your floors stay clean.",
  },
  {
    icon: RefreshCw,
    headline: "gone in 60 days",
    body: "Fully biodegradable. Flush it or compost it. Nothing goes to landfill.",
  },
];

export default function WhyTofu() {
  return (
    <section
      id="why-tofu"
      className="bg-bg-surface py-28 px-5"
      aria-labelledby="why-tofu-heading"
    >
      <div className="mx-auto" style={{ maxWidth: "980px" }}>
        {/* Section header */}
        <div className="mb-14">
          <p className="text-caption font-normal text-text-secondary uppercase tracking-widest mb-6">
            the science made simple
          </p>
          <h2
            id="why-tofu-heading"
            className="text-h2 md:text-h1 font-semibold text-text-primary tracking-tight"
          >
            why tofu works.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature) => (
            <FeatureCard key={feature.headline} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
