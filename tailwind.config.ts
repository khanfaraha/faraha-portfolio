import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#04060B",
        navy: {
          950: "#060A14",
          900: "#0A1020",
          800: "#101A31",
          700: "#182848",
        },
        accent: {
          DEFAULT: "#5CC8FF",
          soft: "#A5E1FF",
          strong: "#3B82F6",
        },
        muted: "#9AA8C1",
        dim: "#7D8BA6",
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(92,200,255,0.12), 0 24px 60px -24px rgba(59,130,246,0.45)",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(4%, 3%, 0)" },
        },
        "hero-in": {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "none" },
        },
      },
      animation: {
        drift: "drift 28s ease-in-out infinite",
        "hero-in": "hero-in 0.7s cubic-bezier(0.2, 0.7, 0.2, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
