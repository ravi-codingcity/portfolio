/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "slow-spin": "spin 4s linear infinite",
        spinner: "spin 0.6s linear infinite",
      },
      borderColor: {
        "loader-top": "#3498db",
        "loader-transparent": "transparent",
      },
    },
  },
  plugins: [],
};
