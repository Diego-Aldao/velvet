import type { Config } from "tailwindcss";
import { addDynamicIconSelectors } from "@iconify/tailwind";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/slider.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: "var(--font-raleway)",
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
        "main-black": "#17181d",
        primary: "#edc967",
        secondary: "#202f38",
        "secondary-black": "#1b1d22",
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
  plugins: [addDynamicIconSelectors()],
};
export default config;
