import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8B5CF6",
        secondary: "#06B6D4",
        dark: "#0B0F19",
      },

      boxShadow: {
        glow: "0 0 30px rgba(139, 92, 246, 0.25)",
      },

      animation: {
        float: "float 4s ease-in-out infinite",
        glow: "glow 3s ease-in-out infinite alternate",
      },

      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },

        glow: {
          from: {
            boxShadow: "0 0 10px rgba(139,92,246,0.2)",
          },
          to: {
            boxShadow: "0 0 25px rgba(6,182,212,0.35)",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;