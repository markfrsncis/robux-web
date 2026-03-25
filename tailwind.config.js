/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      boxShadow: {
        glow: '0 0 30px rgba(168, 85, 247, 0.35)',
        card: '0 12px 40px rgba(2, 6, 23, 0.35)'
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at 20% 20%, rgba(236,72,153,0.2), transparent 35%), radial-gradient(circle at 80% 0%, rgba(59,130,246,0.25), transparent 45%), radial-gradient(circle at 50% 100%, rgba(168,85,247,0.2), transparent 40%)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        pulseSlow: {
          '0%, 100%': { opacity: 0.6 },
          '50%': { opacity: 1 }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseSlow: 'pulseSlow 8s ease-in-out infinite'
      }
    }
  },
  plugins: []
};
