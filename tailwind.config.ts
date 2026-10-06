import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "rgb(var(--c-base) / <alpha-value>)",
          panel: "rgb(var(--c-base-panel) / <alpha-value>)",
          panel2: "rgb(var(--c-base-panel2) / <alpha-value>)",
          border: "rgb(var(--c-base-border) / <alpha-value>)",
        },
        ink: {
          DEFAULT: "rgb(var(--c-ink) / <alpha-value>)",
          muted: "rgb(var(--c-ink-muted) / <alpha-value>)",
          faint: "rgb(var(--c-ink-faint) / <alpha-value>)",
        },
        model: {
          DEFAULT: "rgb(var(--c-model) / <alpha-value>)",
          dim: "rgb(var(--c-model-dim) / <alpha-value>)",
          bright: "rgb(var(--c-model-bright) / <alpha-value>)",
        },
        data: {
          DEFAULT: "rgb(var(--c-data) / <alpha-value>)",
          dim: "rgb(var(--c-data-dim) / <alpha-value>)",
          bright: "rgb(var(--c-data-bright) / <alpha-value>)",
        },
      },
      fontFamily: {
        display: ["var(--font-inter)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(143,161,179,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(143,161,179,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      keyframes: {
        "pulse-line": {
          "0%": { strokeDashoffset: "24" },
          "100%": { strokeDashoffset: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0px)" },
        },
      },
      animation: {
        "pulse-line": "pulse-line 1.2s linear infinite",
        float: "float 4s ease-in-out infinite",
        fadeUp: "fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};
export default config;
