import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        hackathon: {
          primary: "#FF0909",
          background: "#171717",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        mono: ["var(--font-mono)", ...fontFamily.mono],
        ndot47: "var(--font-ndot47)",
        geistMono: "var(--font-geist-mono)",
        geistSans: "var(--font-geist-sans)",
      },
    },
  },
  plugins: [],
};
export default config;
