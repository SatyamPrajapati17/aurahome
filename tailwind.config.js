/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'jet-black': '#050505',
        'deep-black': '#0B0D10',
        'surface-black': '#11151A',
        'surface-elevated': '#171D24',
        'border-dark': '#26313B',
        'cerulean-blue': '#168ACB',
        'cerulean-bright': '#27B8FF',
        'cerulean-soft': '#7DD8FF',
        'neon-rose': '#FF3B81',
        'neon-rose-bright': '#FF5C98',
        'neon-rose-soft': '#FFB1C9',
        'white-soft': '#F7FAFC',
        'muted-white': '#B4C0CA',
        'muted-blue-gray': '#768797',
        'success': '#38D996',
        'warning': '#FFC857',
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'panel': '22px',
        'panel-lg': '26px',
        'card': '14px',
      },
      boxShadow: {
        'cerulean-glow': '0 0 25px -5px rgba(22, 138, 203, 0.35)',
        'rose-glow': '0 0 25px -5px rgba(255, 59, 129, 0.35)',
        'panel-soft': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        }
      }
    },
  },
  plugins: [],
}
