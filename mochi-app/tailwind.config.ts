import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-primary": "#2D6A4F",
        "brand-hover": "#1E4D38",
        "bg-surface": "#F5F5F7",
        "text-primary": "#1D1D1F",
        "text-secondary": "#6E6E73",
        "soft-sage": "#74C69D",
        "warm-sand": "#F4E1C1",
        "deep-forest": "#1B4332",
        // Complementary accent colors
        "terra":       "#C8714F",   // terracotta — warm earthy contrast to sage
        "terra-hover": "#B05E3E",
        "cream":       "#FAF3E8",   // warm cream — softer alternative to cold surface gray
      },
      fontFamily: {
        sans: ["Inter", "var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      fontSize: {
        display: ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.04em" }],
        h1: ["2.5rem", { lineHeight: "1.2", letterSpacing: "-0.03em" }],
        h2: ["1.75rem", { lineHeight: "1.25", letterSpacing: "-0.02em" }],
        h3: ["1.25rem", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
        "body-lg": ["1.1875rem", { lineHeight: "1.6" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5" }],
        caption: ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.02em" }],
      },
      maxWidth: {
        content: "980px",
        editorial: "680px",
      },
      height: {
        nav: "60px",
      },
      padding: {
        nav: "60px",
      },
      spacing: {
        nav: "60px",
      },
      transitionDuration: {
        "250": "250ms",
      },
      boxShadow: {
        subtle: "0 1px 4px rgba(0,0,0,0.06)",
        "card-hover": "0 4px 16px rgba(0,0,0,0.08)",
      },
      animation: {
        "bounce-slow": "bounce-slow 2s ease-in-out infinite",
      },
      keyframes: {
        "bounce-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(6px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
