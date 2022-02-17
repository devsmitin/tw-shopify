module.exports = {
  content: ["./shopify/**/*.{liquid,html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
