/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    // ✅ Add this
    extend: {
      colors: {
        primary: "#a30bfbff", // Custom purple for QuizTales
      },
    },
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {},
  },
  plugins: [],
};
