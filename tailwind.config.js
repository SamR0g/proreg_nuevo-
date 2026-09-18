/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7CC8FF',
          50: '#f0f8ff',
          100: '#e0f0ff',
          200: '#b8e0ff',
          300: '#91d1ff',
          400: '#7CC8FF',
          500: '#5BB5F0',
          600: '#3A9FDB',
          700: '#2A8AC0',
          800: '#1a6A9E',
          900: '#0d4a7a',
          950: '#06304f',
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
          DEFAULT: '#FF6B35',
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
