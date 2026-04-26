/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cream: '#FDF8F0',
        crimson: '#DC143C',
        navy: '#003893',
        gold: '#E8A020',
        charcoal: '#1A1A2E',
        muted: '#6B7280',
        dark: {
          bg: '#0D0D1A',
          surface: '#161628',
          text: '#F5F0E8'
        }
      },
      fontFamily: {
        nepali: ['Noto Sans Devanagari', 'sans-serif'],
        sans: ['Inter', 'DM Sans', 'sans-serif']
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
