/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        header: `url('images/img1.jpg'), linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7))`,
        timeline: `url('images/img7.jpg'), linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8))`,
      },
    },
  },
  plugins: [],
};
