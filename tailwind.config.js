/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins, sans-serif'],
      },
      backgroundImage: {
        slider: "url('/images/background.jpg')",
      },
    },
    screens: {
      sm: '540px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
  },
  plugins: [],
};
