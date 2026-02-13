import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0E7490",
          dark: "#164E63",
          light: "#E0F2FE"
        }
      }
    },
  },
  plugins: [],
};

export default config;
