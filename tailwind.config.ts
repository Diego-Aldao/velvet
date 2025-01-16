import type { Config } from "tailwindcss";
import { addDynamicIconSelectors } from "@iconify/tailwind";
import { nextui } from "@nextui-org/theme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/slider.js",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "jakarta-sans": "var(--font-jakarta-sans)",
        "playfair-display": "var(--font-playfair-display)",
        ephesis: "var(--font-ephesis)",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.165, 0.84, 0.44, 1)",
      },
      colors: {
        "main-white": "#fdfdfd",
        "main-black": "#1a1a1a",
        primary: "#edc967",
        secondary: "#1f3735",
        "secondary-black": "#131415",
        "main-red": "#fb5050",
      },
      backgroundSize: {
        "size-200": "200% 200%",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%",
      },
    },
  },
  darkMode: "class",
  plugins: [addDynamicIconSelectors(), nextui()],
};
export default config;
