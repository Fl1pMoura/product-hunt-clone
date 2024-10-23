import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "font-grey": "#666666",
        "font-black": "#333333",
        "font-light-blue": "#465381",
        "font-lighter-blue": "#DAE1FB",
        "font-orange": "#E5461A",
        "font-light-orange": "#F1CBC1",
        body: "#F4F5F6",
      },
    },
  },
  plugins: [],
};
export default config;
