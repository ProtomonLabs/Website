/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        cobalt: {
          50: "#eef2ff", 100: "#e0e7ff", 200: "#c7d2fe", 300: "#a5b4fc",
          400: "#818cf8", 500: "#6366f1", 600: "#4f46e5", 700: "#4338ca",
          800: "#3730a3", 900: "#312e81",
        },
      },
      fontFamily: {
        heading: ["Syne", "system-ui", "sans-serif"],
        body: ["DM Sans", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 15px -3px rgba(0,0,0,0.06), 0 10px 20px -2px rgba(0,0,0,0.03)",
        card: "0 1px 2px rgba(0,0,0,0.03), 0 8px 24px -6px rgba(0,0,0,0.05)",
        "card-hover": "0 1px 3px rgba(0,0,0,0.03), 0 16px 40px -8px rgba(79,70,229,0.10)",
        glow: "0 0 24px rgba(99,102,241,0.12)",
        strong: "0 4px 16px -4px rgba(0,0,0,0.06), 0 12px 40px -8px rgba(0,0,0,0.04)",
      },
    },
  },
  plugins: [],
};