import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        parchment: "#F5EFE3",
        cream: "#FBF7F0",
        plum: "#4B2142",
        gold: "#B8903F",
        charcoal: "#2E2A2B",
        roseclay: "#A86D63"
      },
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "serif"],
        sans: ["Arial", "Helvetica", "sans-serif"]
      },
      boxShadow: {
        soft: "0 10px 30px rgba(46, 42, 43, 0.08)"
      },
      backgroundImage: {
        "soft-radial":
          "radial-gradient(circle at top, rgba(184, 144, 63, 0.12), transparent 35%)"
      }
    }
  },
  plugins: []
};

export default config;
