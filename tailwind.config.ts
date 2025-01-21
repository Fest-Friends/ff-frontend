import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home': "linear-gradient(180.13deg, #18181A 0.11%, rgba(24, 24, 26, 0.6) 50%, #18181A 99.89%), url('/image/home_background_image.jpg')",
      },
      colors: {
        primary: 'var(--primary)',
        bg: 'var(--bg)',
        areaBg: 'var(--areaBg)',

        textDark: 'var(--textDark)',
        textLess: 'var(--textLess)',
        textMuted : 'var(--textMuted)',
      },
    },
  },
  plugins: [],
} satisfies Config;