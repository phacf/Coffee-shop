/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        baloo: ['Baloo 2', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        'title-xl': ['3rem', '130%'],
        'title-l': ['2rem', '130%'],
        'title-m': ['1.5rem', '130%'],
        'title-s': ['1.25rem', '130%'],
        'title-xs': ['1.125rem', '130%'],
        'text-l': ['1.25rem', '130%'],
        'text-m': ['1rem', '130%'],
        'text-s': ['0.875rem', '130%'],
        'text-xs': ['0.75rem', '130%'],
        tag: ['0.625rem', '130%'],
        'button-g': ['0.875rem', '160%'],
        'button-m': ['0.75rem', '160%'],
      },
      fontWeight: {
        'extra-bold': 800,
        bold: 700,
        normal: 400,
      },
      colors: {
        white: '#FFFFFF',
        background: '#FAFAFA',
        'base-card': '#F3F2F2',
        'base-input': '#EDEDED',
        'base-button': '#E6E6E5',
        'base-hover': '#D7D5D5',
        'base-label': '#8D8686',
        'base-text': '#574F4D',
        'base-subtitle': '#403937',
        'base-title': '#272221',

        'purple-light': '#EBE5F9',
        purple: '#8047F8',
        'purple-dark': '#4B2995',

        'yellow-light': '#F1E9C9',
        yellow: '#DBAC2C',
        'yellow-dark': '#C47F17',
      },
    },
  },
  plugins: [],
}
