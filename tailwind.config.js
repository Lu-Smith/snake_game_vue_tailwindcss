/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        linksColor: '#ffb5b5', 
        textColor: ' #fafafa', 
        bgColor: '#222831',
        addColor: '#38598b',
        lightColor: '#fcff82',
        darkColor: '#f5f9ee',
        focusColor: '#f95959',
      },
    },
  },
  plugins: [],
}

