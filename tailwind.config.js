/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 40px rgba(129, 140, 248, 0.45)',
        neon: '0 0 30px rgba(56, 189, 248, 0.35), 0 0 80px rgba(217, 70, 239, 0.25)'
      },
      keyframes: {
        drift: {
          '0%,100%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(0,-24px,0)' }
        },
        gradientShift: {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        }
      },
      animation: {
        drift: 'drift 12s ease-in-out infinite',
        gradientShift: 'gradientShift 12s ease infinite'
      }
    }
  },
  plugins: []
};
