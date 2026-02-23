export default function OriginStory() {
  return (
    <section
      className="bg-white py-28 px-5"
      aria-labelledby="origin-heading"
    >
      <div
        className="mx-auto"
        style={{ maxWidth: "680px" }}
      >
        {/* Label */}
        <p className="text-caption font-normal text-text-secondary uppercase tracking-widest mb-6">
          our story
        </p>

        {/* Headline */}
        <h2
          id="origin-heading"
          className="text-[1.75rem] md:text-[2.25rem] font-semibold leading-[1.2] tracking-[-0.025em] text-text-primary mb-10"
        >
          we started with a better question.
        </h2>

        {/* Body */}
        <div className="flex flex-col gap-6 text-body-lg text-text-secondary leading-[1.7]">
          <p>
            Most cat litters are made from strip-mined clay or silica — materials that aren&apos;t
            great for cats, homes, or landfills. We asked: what if litter could be made from
            something that already exists?
          </p>
          <p>
            Tofu production creates a soy byproduct that would otherwise be discarded. We turned
            it into something remarkable.
          </p>
          <p>
            mochi is the result — plant-based, dust-free, biodegradable, and genuinely better.
          </p>
        </div>
      </div>
    </section>
  );
}
