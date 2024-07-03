import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "inter-tight": "var(--font-inter)",
        "nunito-sans": "var(--font-nunito-sans)",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.165, 0.84, 0.44, 1)",
      },
      colors: {
        "main-white": "#fdfdfd",
        "main-black": "#0e0e10",
        primary: "#a5e1cd",
        "secondary-black": "#1a1a1a",
        accent: "#a1a28e",
      },
    },
  },
  plugins: [],
};
export default config;
