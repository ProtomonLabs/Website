/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        cobalt: {
          50: "#f5f3ff", 100: "#ede9fe", 200: "#ddd6fe", 300: "#c4b5fd",
          400: "#a78bfa", 500: "#8b5cf6", 600: "#6d28d9", 700: "#5b21b6",
          800: "#4c1d95", 900: "#3b0764",
        },
      },
      fontFamily: {
        heading: ["Syne", "system-ui", "sans-serif"],
        body: ["IBM Plex Sans", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.03)",
        "card-hover": "0 4px 12px rgba(0,0,0,0.06), 0 2px 4px rgba(0,0,0,0.04)",
        glow: "0 0 20px rgba(91,33,182,0.15)",
        soft: "0 2px 8px rgba(0,0,0,0.04)",
        strong: "0 4px 16px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};
