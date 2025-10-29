/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#9333EA',
        accent: '#F472B6',
        warning: '#FDE047',
      },
      fontFamily: { poppins: ['Poppins', 'sans-serif'] },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(90deg, #BFDBFE 0%, #F3E8FF 50%, #FCE7F3 100%)',
        'circle-blue': 'linear-gradient(90deg, #60A5FA 0%, #A855F7 100%)',
        'circle-pink': 'linear-gradient(90deg, #F472B6 0%, #FDE047 100%)',
      },
    },
  },
  plugins: [],
}
