/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./apps/coffee-shop/index.html",
    "./apps/todo-list/index.html",
    "./apps/sample-web-components/index.html",
    "./apps/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

