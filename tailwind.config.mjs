/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0066B3',
          ice: '#F0F4F8',
          dark: '#1A1A1A',
          snow: '#FAFBFD',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Oswald', 'system-ui', 'sans-serif'],
        cursive: ['Yellowtail', 'cursive'],
      },
    },
  },
  plugins: [],
};
