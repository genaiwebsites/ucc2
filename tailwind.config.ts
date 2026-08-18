import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B1240",
          900: "#070B28",
          800: "#0B1240",
          700: "#101954",
        },
        navy: {
          DEFAULT: "#141C55",
          2: "#1B2566",
          hover: "#222D75",
        },
        brand: {
          blue: "#1F55E8",
          hi: "#2E6BFF",
          soft: "#EAF0FE",
          light: "#8FB0FF",
        },
        page: {
          DEFAULT: "#EDF1F9",
          2: "#F5F8FC",
        },
        card: "#FFFFFF",
        line: {
          DEFAULT: "#E2E8F4",
          navy: "rgba(255, 255, 255, 0.11)",
        },
        textMuted: "#5C6785",
        textNavy: "rgba(255, 255, 255, 0.62)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-onest)", "var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        sm: "16px",
        DEFAULT: "24px",
        lg: "32px",
        bleed: "44px",
      },
      boxShadow: {
        card: "0 2px 4px rgba(15,28,74,.03), 0 12px 32px rgba(15,28,74,.05)",
        cardHi: "0 4px 8px rgba(15,28,74,.05), 0 20px 48px rgba(15,28,74,.09)",
        nav: "0 4px 24px rgba(15,28,74,.06)",
        navStuck: "0 6px 32px rgba(15,28,74,.1)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 46s linear infinite",
        "marquee-rev": "marquee 54s linear infinite reverse",
      },
    },
  },
  plugins: [],
};

export default config;
