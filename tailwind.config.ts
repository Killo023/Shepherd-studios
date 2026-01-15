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
        // Brand colors - Shepherd Studios (dark teal from logo)
        primary: {
          DEFAULT: "#1a5f7a", // Main brand color - dark teal from logo
          light: "#2a7fa0",
          dark: "#0f4a5f",
          50: "#e6f0f5",
          100: "#b3d4e0",
          200: "#80b8cb",
          300: "#4d9cb6",
          400: "#1a80a1",
          500: "#1a5f7a",
          600: "#144a5f",
          700: "#0f3544",
          800: "#0a2029",
          900: "#050b0e",
        },
        secondary: {
          DEFAULT: "#ffffff",
          light: "#f5f5f5",
          dark: "#e0e0e0",
        },
        accent: {
          DEFAULT: "#2a7fa0", // Lighter teal for accents and CTAs
          light: "#4da3c4",
          dark: "#1a5f7a",
        },
        lightBlue: {
          DEFAULT: "#6b9bc2", // Lighter blue for secondary text
          light: "#8bb3d4",
          dark: "#4d7ba0",
        },
        blue: {
          100: "#CDE0EE", // Light blue background for problem section
          200: "#B3D4E0", // Light blue for step 01
        },
        // Add more brand colors here as extracted from PDF
      },
    },
  },
  plugins: [],
};
export default config;
