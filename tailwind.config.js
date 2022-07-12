/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1680px',
      '3xl': '1920px',
      '4xl': '2560px',
    },
    extend: {
      flex: {
        2: '2 2 0%',
        3: '3 3 0%',
      },
      strokeWidth: {
        3: '3px',
        4: '4px',
        5: '5px',
        6: '6px',
      },
    },
  },
};

