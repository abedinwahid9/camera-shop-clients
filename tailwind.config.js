import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#172a3e",
        "secondary-color": "#ce713d",
        "text-color": "#8a8a8a",
        "optional-color": "#0a578c",
      },
    },
  },
  plugins: [daisyui],
  themes: ["light"],
};
