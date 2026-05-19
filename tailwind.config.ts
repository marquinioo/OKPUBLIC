import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#514FAB",
        "primary-dark": "#292966",
        accent: "#F0AD4E",
        "accent-subtle": "#6563D6",
        surface: "#F8F9FC",
        muted: "#CCD6DF",
        body: "#33373D",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
