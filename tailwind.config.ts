import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Gray scale
        'gray': {
          100: '#F5F5F5',
          200: '#DFDFDE',
          500: '#989898',
          700: '#676868',
          900: '#282828',
        },
        // Text colors
        'primary': '#282828',
        'secondary': '#676868',
        'disabled': '#989898',
        'link': '#DC1E34',
        // Status colors
        'error': '#A32136',
        'success': '#01875E',
        // Brand colors
        'red': '#FB273E',
        'yellow': '#FBAC46',
        'maroon': '#A32136',
        'orange': '#EE7624',
        'purple': '#271A72',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #FBAC46, #FB273E)',
      },
      fontFamily: {
        sans: ['Interstate Regular', 'system-ui', 'sans-serif'],
        display: ['Interstate BlackCompressed', 'Interstate UltraBlackComp', 'system-ui', 'sans-serif'],
        'black-comp': ['Interstate BlackCompressed', 'sans-serif'],
        'black-cond': ['Interstate BlackCondensed', 'sans-serif'],
        'bold-cond': ['Interstate BoldCondensed', 'sans-serif'],
        'light-cond': ['Interstate LightCondensed', 'sans-serif'],
        'regular-comp': ['Interstate RegularCompressed', 'sans-serif'],
        'regular-italic': ['Interstate RegularItalic', 'sans-serif'],
        'ultrablack-comp': ['Interstate UltraBlackComp', 'sans-serif'],
        'extralight-italic': ['Interstate ExtraLightItalic', 'sans-serif'],
        'light-italic': ['Interstate LightItalic', 'sans-serif'],
        'thin-italic': ['Interstate ThinItalic', 'sans-serif'],
        // Additional font variants
        'regular': ['Interstate Regular', 'sans-serif'],
        'bold': ['Interstate Bold', 'sans-serif'],
        'black': ['Interstate Black', 'sans-serif'],
        'ultrablack': ['Interstate UltraBlack', 'sans-serif'],
        'light': ['Interstate Light', 'sans-serif'],
        'thin': ['Interstate Thin', 'sans-serif'],
        'hairline': ['Interstate Hairline', 'sans-serif'],
        'extralight': ['Interstate ExtraLight', 'sans-serif'],
      },
      fontSize: {
        'hero-title': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'section-title': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'hero': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      },
    },
  },
  plugins: [],
}

export default config