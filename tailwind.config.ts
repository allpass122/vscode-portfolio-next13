import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      cmono: ["monospace"],
      inter: ["var(--font-inter)"],
      ps2p: ["var(--press-start-2p)"],
      tech: ["var(--share-tech-mono)"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "dark-primary": "#1f2428",
        "dark-second": "#24292e",
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
        },
      },
      animation: {
        typing: "typing 2s steps(20) alternate, blink 1s infinite",
      },
      cursor: {
        replay: "url('/replay2.svg'), pointer",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
    plugin(function ({ addUtilities, addVariant }) {
      addUtilities({
        /* Hide scrollbar for Chrome, Safari and Opera */
        ".hide-scrollbar": {
          /* Firefox */
          "scrollbar-width": "none",
          /* IE 10+ */
          "-ms-overflow-style": "none",
          /* Safari and Chrome */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
        ".min-h-screen": {
          /* Use 100dvh if supported */
          /* https://caniuse.com/mdn-css_types_length_viewport_percentage_units_dynamic */
          minHeight: "100dvh",
        },
      });
      /* When on pointer device (desktop) */
      addVariant("not-hover", "@media (hover: hover) and (pointer: fine)");
    }),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f4f4f5",
          secondary: "#24292e",
          accent: "#e879f9",
          neutral: "#a3a3a3",
          "base-100": "#1f2428",
        },
      },
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
    ],
  },
};
export default config;
