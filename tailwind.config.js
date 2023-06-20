/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js",
    "./src/components/*.{js,jsx,tsx}",
    "./src/components/**/*.{js,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxHeight: {
        '80hv': '80vh',
      }
    }
  },
  plugins: [],
}