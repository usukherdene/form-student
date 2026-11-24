import type { Config } from "tailwindcss";

const config = {
  theme: {
    extend: {
      fontFamily: { sans: ["Inter", "system-ui", "sans-serif"] },
    },
  },
} satisfies Config;

export default config;
