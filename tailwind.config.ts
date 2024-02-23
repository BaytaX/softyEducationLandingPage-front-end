import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "color-blue-1": "#0080DF",
        "color-blue-2": "#2860D7",
        "color-blue-3": "#EFF6FF",
        "color-blue-4": "#4475F2",
        "color-blue-5": "#E3EBFD",
        "color-blue-6": "#D0E2F5",
        "color-blue-7": "#5590f5",
        "color-blue-8": "#F5F7FF",
        "color-blue-9": "#F5F5F5",
        "color-blue-10": "#F2F6FD",
        "color-blue-11": "#2684FC",
        "color-blue-border": "#0080DF90",

        "color-yellow-1": "#FFC900",
        "color-yellow-2": "#FFAB00",
        "color-green-1": "#4FBD6E",

        "gray-1": "#000030BF",
        "gray-2": "#000030CC",
        "linear-gradient-explore-img": "#00003099",

        "bg-auth-pages": "#EBEBFF",

        "bg-color-bootcamps": "#FBFBFB",
        "bg-color-bootcamps-2": "#F9FAFF",
        "bg-color-getToKnowUs": "#C5D6F1",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  variants: {
    float: ["responsive", "direction"],
    margin: ["responsive", "direction"],
    padding: ["responsive", "direction"],
  },

  plugins: [require("tailwind-scrollbar-hide"), require("tailwindcss-dir")()],
};
export default config;
