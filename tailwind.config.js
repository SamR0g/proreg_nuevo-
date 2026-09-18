/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a2332',
          50: '#f4f6f9',
          100: '#e8edf3',
          200: '#c8d3e0',
          300: '#9fb1c6',
          400: '#6b85a3',
          500: '#4a6385',
          600: '#3a5170',
          700: '#2d3f57',
          800: '#1a2332',
          900: '#111827',
          950: '#0b0f1a',
        },
        accent: {
          DEFAULT: '#f5a623',
          light: '#ffb800',
          dark: '#e09411',
          50: '#fff8eb',
          100: '#ffefc6',
          200: '#ffdf88',
          300: '#ffc94a',
          400: '#f5a623',
          500: '#e09411',
          600: '#b87a0c',
          700: '#8a5b09',
          800: '#5c3d06',
          900: '#2e1f03',
        },
        success: {
          DEFAULT: '#25D366',
          light: '#34e57a',
          dark: '#1da851',
        },
        warning: {
          DEFAULT: '#f5a623',
        },
        error: {
          DEFAULT: '#e5484d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
