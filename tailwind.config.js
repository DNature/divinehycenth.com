const toTailwind = require("@theme-ui/tailwind");
const theme = require("./theme");

module.exports = {
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xsm: "400px"
    },
    container: {
      center: true
    },
    extend: {
      width: {
        "48%": "48%"
      }
    }
  },
  variants: {},
  plugins: []
};
