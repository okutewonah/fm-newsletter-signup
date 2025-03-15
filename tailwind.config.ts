import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      tomato: "hsl(4, 100%, 67%)",
      "dark-slate-grey": "hsl(234, 29%, 20%)",
      "charcoal-grey": "hsl(235, 18%, 26%)",
      grey: "hsl(231, 7%, 60%)",
      white: "hsl(0, 0%, 100%)",
    },
    extend: {
      backgroundImage: {
        illustration: "url('/assets/images/illustration-sign-up-desktop.svg')",
        "illustration-mobile":
          "url('/assets/images/illustration-sign-up-mobile.svg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
