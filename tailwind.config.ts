import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: "#00F5FF",
        bg: "#0A0A0F"
      },
      backdropBlur: { 
        glass: "12px" 
      }
    },
  },
  plugins: [],
}
export default config
