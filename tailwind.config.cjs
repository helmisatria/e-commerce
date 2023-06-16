/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        dark: "#161618",
      },
      letterSpacing: {
        tighter: "-0.04em",
      },
    },
  },
  plugins: [],
};
