/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./files/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 5px 5px 15px rgba(0,0,0,0.7)',
      }

      
    }
  }
}

