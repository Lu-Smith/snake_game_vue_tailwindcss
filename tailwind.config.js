/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        linksColor: '#a2a8d3', 
        textColor: '#e7eaf6', 
        bgColor: '#113f67',
        addColor: '#38598b',
        lightColor: '#fcff82',
        darkColor: '#f5f9ee',
      },
    },
  },
  plugins: [],
}

