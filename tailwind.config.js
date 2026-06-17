/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: {
          DEFAULT: '#060a10',
          deep: '#040608',
        },
        surface: {
          DEFAULT: '#0d1420',
          elevated: '#121b2b',
          card: '#0f1826',
        },
        line: {
          DEFAULT: '#1c2738',
          soft: '#141d2c',
        },
        ink: {
          DEFAULT: '#e7eef7',
          muted: '#8a99b3',
          dim: '#5a6a82',
        },
        signal: {
          blue: '#3b82f6',
          cyan: '#22d3ee',
          vital: '#34e8a0',
          amber: '#f5a623',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgba(34, 211, 238, 0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 211, 238, 0.045) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '32px 32px',
      },
      boxShadow: {
        glow: '0 0 24px rgba(34, 211, 238, 0.25)',
        'glow-blue': '0 0 24px rgba(59, 130, 246, 0.3)',
        'glow-vital': '0 0 18px rgba(52, 232, 160, 0.25)',
        card: '0 4px 30px rgba(0, 0, 0, 0.4)',
      },
      animation: {
        'pulse-soft': 'pulseSoft 2.4s ease-in-out infinite',
        'trace-dash': 'traceDash 3.2s linear infinite',
        float: 'float 7s ease-in-out infinite',
        blink: 'blink 1.1s steps(1) infinite',
        'ecg-scroll': 'ecgScroll 8s linear infinite',
        'scan-sweep': 'scanSweep 4.5s ease-in-out infinite',
      },
      keyframes: {
        scanSweep: {
          '0%': { top: '-6%', opacity: 0 },
          '12%': { opacity: 1 },
          '88%': { opacity: 1 },
          '100%': { top: '104%', opacity: 0 },
        },
        ecgScroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: 0.55, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.08)' },
        },
        traceDash: {
          '0%': { strokeDashoffset: 1000 },
          '100%': { strokeDashoffset: 0 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        blink: {
          '0%, 49%': { opacity: 1 },
          '50%, 100%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
}
