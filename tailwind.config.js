/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        cardFront: "url('./public/bg-card-front.png')",
        cardBack: "url('./public/bg-card-back.png')"
      },
      fontFamily: {
        grotesk: ['Space Grotesk', 'sans-serif']
      }
    }
  },
  plugins: []
}
