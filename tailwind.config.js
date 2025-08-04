/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'jet': '#383838',
        'onyx': '#2b2b2b',
        'eerie-black-1': '#212121',
        'eerie-black-2': '#1f1f1f',
        'smoky-black': '#121212',
        'white-1': '#ffffff',
        'white-2': '#fafafa',
        'orange-yellow': '#ffd93d',
        'vegas-gold': '#c4a484',
        'light-gray': '#d6d6d6',
        'bittersweet': '#d65d5d',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'fs-1': '24px',
        'fs-2': '18px',
        'fs-3': '17px',
        'fs-4': '16px',
        'fs-5': '15px',
        'fs-6': '14px',
        'fs-7': '13px',
        'fs-8': '11px',
      },
      fontWeight: {
        'fw-300': '300',
        'fw-400': '400',
        'fw-500': '500',
        'fw-600': '600',
      },
      boxShadow: {
        'shadow-1': '-4px 8px 24px rgba(0, 0, 0, 0.25)',
        'shadow-2': '0 16px 30px rgba(0, 0, 0, 0.25)',
        'shadow-3': '0 16px 40px rgba(0, 0, 0, 0.25)',
        'shadow-4': '0 25px 50px rgba(0, 0, 0, 0.15)',
        'shadow-5': '0 24px 80px rgba(0, 0, 0, 0.25)',
      },
      animation: {
        'fade': 'fade 0.5s ease forwards',
        'scaleUp': 'scaleUp 0.5s ease forwards',
      },
      keyframes: {
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.8)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      backgroundImage: {
        'gradient-onyx': 'linear-gradient(to bottom right, hsl(240, 1%, 25%) 3%, hsl(0, 0%, 19%) 97%)',
        'gradient-jet': 'linear-gradient(to bottom right, hsla(240, 1%, 18%, 0.251) 0%, hsla(240, 2%, 11%, 0) 100%), hsl(240, 2%, 13%)',
        'gradient-yellow-1': 'linear-gradient(to bottom right, hsl(45, 100%, 71%) 0%, hsla(36, 100%, 69%, 0) 50%)',
        'gradient-yellow-2': 'linear-gradient(135deg, hsla(45, 100%, 71%, 0.251) 0%, hsla(35, 100%, 68%, 0) 59.86%), hsl(240, 2%, 13%)',
        'text-gradient-yellow': 'linear-gradient(to right, hsl(45, 100%, 72%), hsl(35, 100%, 68%))',
      },
    },
  },
  plugins: [],
} 