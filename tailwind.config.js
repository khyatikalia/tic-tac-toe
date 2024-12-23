/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        16: "repeat(3, minmax(0, 80px))",

        // Complex site-specific column configuration
        footer: "200px minmax(900px, 1fr) 100px",
      },
    },
  },
  plugins: [],
};
