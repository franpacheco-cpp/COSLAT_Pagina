import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        coslat: {
          blue: "#3D9DD9",
          yellow: "#F2E205",
          dark: "#BF751B",
          light: "#03A678",
          accent: "#D9043D",
        },
      },
      fontFamily: {
        pixel: ['var(--font-vt323)', 'monospace'],
        mono: ['var(--font-space-mono)', 'monospace'],
        serif: ['var(--font-libre)', 'serif'],
      },
      backgroundImage: {
        'pixel-pattern': "url(\"data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2300158F' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M5 0h1v1H5zM0 5h1v1H0z'/%3E%3C/g%3E%3C/svg%3E\")",
      }
    },
  },
  plugins: [],
};
export default config;
