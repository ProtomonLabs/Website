/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        cobalt: {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
        },
        ocean: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        ember: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
        },
        surface: {
          DEFAULT: "#fafcff",
          dark: "#f1f5f9",
          lighter: "#ffffff",
        },
      },
      fontFamily: {
        heading: ["Syne", "system-ui", "sans-serif"],
        body: ["DM Sans", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 15px -3px rgba(0, 0, 0, 0.06), 0 10px 20px -2px rgba(0, 0, 0, 0.03)",
        glow: "0 0 28px rgba(99, 102, 241, 0.15)",
        card: "0 1px 2px rgba(0, 0, 0, 0.03), 0 8px 24px -6px rgba(0, 0, 0, 0.05)",
        "card-hover": "0 1px 3px rgba(0, 0, 0, 0.03), 0 16px 40px -8px rgba(79, 70, 229, 0.12)",
        strong: "0 4px 16px -4px rgba(0, 0, 0, 0.07), 0 12px 40px -8px rgba(0, 0, 0, 0.05)",
        hero: "0 20px 60px -12px rgba(79, 70, 229, 0.25)",
      },
    },
  },
  plugins: [],
};