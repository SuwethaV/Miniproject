/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // ✅ Include all your React component files
  ],
  theme: {
    extend: {
      colors: {
        primary: "#a30bfbff", // Custom purple for QuizTales
      },
    },
  },
  plugins: [],
};
