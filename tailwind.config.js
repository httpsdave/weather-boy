/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'weather-blue': '#5FC2E7',
        'weather-dark': '#0F172A',
        'weather-gray': '#1E293B',
        'sky-vibrant': '#7DD3FC',
        'sunshine': '#FDE047',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'rain': 'rain 1s linear infinite',
        'snow': 'snow 3s linear infinite',
        'twinkle': 'twinkle 2s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'card-pop': 'cardPop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        rain: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(200px)' },
        },
        snow: {
          '0%': { transform: 'translateY(0) rotate(0deg)' },
          '100%': { transform: 'translateY(300px) rotate(360deg)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
        cardPop: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      boxShadow: {
        'card': '0 10px 40px -10px rgba(0, 0, 0, 0.15)',
        'card-hover': '0 20px 50px -12px rgba(0, 0, 0, 0.25)',
        'inner-glow': 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.06)',
      },
    },
  },
  plugins: [],
}
