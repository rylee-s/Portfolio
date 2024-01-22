/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "hidden",
  ],
  theme: {
    data: {
      active: "active=true",
      inactive: "active=false",
    },
  },
  extend: {},
  plugins: [],
};
