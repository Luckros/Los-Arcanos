import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        jost:  ["var(--font-jost)", "system-ui", "sans-serif"],
      },
      colors: {
        navy:        "#293b52",
        "navy-deep": "#1e2d40",
        "navy-mid":  "#324660",
        lavender:    "#c2cff4",
        plum:        "#533a51",
        "plum-dark": "#3d2a3b",
        rose:        "#895b76",
        "light-bg":  "#f0f3fa",
        "light-card":"#e8ecf7",
        "text-dark": "#1e2d40",
        "text-mid":  "#3d4f6b",
      },
      fontSize: {
        "display-xl": ["clamp(42px,7vw,76px)", { lineHeight: "1.1" }],
        "display-lg": ["clamp(36px,6vw,62px)", { lineHeight: "1.15" }],
        "display-md": ["clamp(32px,5vw,52px)", { lineHeight: "1.2"  }],
        "display-sm": ["clamp(28px,4vw,44px)", { lineHeight: "1.2"  }],
      },
    },
  },
  plugins: [],
};

export default config;
