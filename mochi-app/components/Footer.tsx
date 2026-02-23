export default function Footer() {
  return (
    <footer
      className="border-t border-gray-200 py-6 px-5"
      aria-label="Site footer"
    >
      <div
        className="mx-auto flex flex-col sm:flex-row items-center justify-between gap-3"
        style={{ maxWidth: "980px" }}
      >
        {/* Wordmark */}
        <span
          className="text-brand-primary font-light tracking-widest text-base leading-none"
          style={{ fontWeight: 300 }}
          aria-label="mochi"
        >
          mochi
        </span>

        {/* Tagline */}
        <p className="text-caption text-text-secondary tracking-wide">
          from bean to box.
        </p>

        {/* Copyright */}
        <p className="text-caption text-text-secondary">
          &copy; 2026 mochi
        </p>
      </div>
    </footer>
  );
}
