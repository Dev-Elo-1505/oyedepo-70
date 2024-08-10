/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        openSans: ['Open Sans', 'sans-serif'],
        sarala: ['Sarala', 'sans-serif'],
    },
    backgroundImage: {
      'banner': "url('../src/assets/oyedepo-banner.webp')",
    },
  },
  plugins: [],
}
}