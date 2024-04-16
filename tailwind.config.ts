import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: colors.white,
      red: colors.red,
      dark: {
        500: "#242424",
        600: "#151515",
      },
      primary: "#FFFFFF",
      secondary: "#d9d9d9",
      accent: "#4EE1A0",
    },
  },
  variants: {
    extend: {
      visibility: ["group-hover"],
    },
  },

  plugins: [],
};
export default config;
