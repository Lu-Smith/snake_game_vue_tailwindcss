/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        linksColor: '#ff5959', 
        textColor: '#085f63', 
        bgColor: '#feffdf',
        addColor: '#49beb7'
      },
    },
  },
  plugins: [],
}

