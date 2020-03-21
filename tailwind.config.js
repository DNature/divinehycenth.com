module.exports = {
  theme: {
    colors: {
      transparent: "transparent",
      white: "#fff",
      black: "#000",
      primary: {
        100: "#0763CE",
        75: "#3E83D3",
        50: "#75A3D9",
        25: "#AEC5DF"
      },
      accent: {
        100: "#26D9D9",
        75: "#60DDDD",
        50: "#85DEDE",
        25: "#B5E2E2"
      },
      gray: {
        100: "#1D2734",
        75: "#4F5660",
        50: "#80858C",
        25: "#C7C9CB"
      },
      gradient: {
        100: "linear-gradient(99.77deg, #0763CE 3.3%, #26D9D9 95.3%)"
      }
    },
    borderRadius: {
      none: "0",
      sm: "0.5rem",
      default: "1rem",
      md: "25px",
      lg: "30px",
      full: "50%",
      large: "40px"
    },
    extend: {}
  },
  variants: {
    maxHeight: {
      "0": "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%"
    }
  },
  plugins: []
};
