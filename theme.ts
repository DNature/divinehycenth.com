// eslint-disable-next-line no-undef

const nightOwl = require("@theme-ui/prism/presets/shades-of-purple.json");
// const nightOwl = require("@theme-ui/prism/presets/shades-of-purple.json");

// eslint-disable-next-line no-undef
export default {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body:
      '"Roboto Slab", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif ',
    heading:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    monospace: "'Fira code', monospace, Menlo"
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 600,
    bold: 700
  },
  lineHeights: {
    body: 1.8,
    heading: 2
  },
  colors: {
    text: "#454f5b",
    background: "#fff",
    primary: "#5c6ac4",
    secondary: "#006fbb",
    highlight: "#47c1bf",
    muted: "#e6e6e6",
    gray: "#dfe3e8",
    accent: "#f49342",
    darken: "#00044c",
    modes: {
      dark: {
        text: "#3e4155",
        background: "#000639",
        primary: "#9c6ade",
        secondary: "#b4e1fa",
        highlight: "#b7ecec",
        muted: "#e6e6e6"
      }
    }
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body"
    },
    h1: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 5
    },
    h2: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 4
    },
    h3: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 3
    },
    h4: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 2
    },
    h5: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 1
    },
    h6: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 0
    },
    p: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
      code: {
        fontFamily: "monospace",
        fontSize: "inherit",
        backgroundColor: "#2D2A55",
        padding: "3px 5px",
        borderRadius: "4px",
        color: "#9EFEFF"
      }
    },
    a: {
      color: "primary"
    },
    li: {
      code: {
        fontFamily: "monospace",
        backgroundColor: "#2D2A55",
        padding: "3px 5px",
        borderRadius: "4px",
        fontSize: "16px",
        color: "#9EFEFF"
      }
    },
    code: {
      fontFamily: "monospace",
      fontSize: "16px"
    },
    pre: {
      ...nightOwl,
      clipPath:
        "polygon(33% 0, 53% 1%, 72% 0, 100% 1%, 100% 99%, 69% 100%, 37% 99%, 0 100%, 0 0, 18% 1%);",
      padding: "18px",
      borderRadius: "7px",
      fontFamily: "'Fira Code', monospace",
      margin: "10px 0",
      overFlow: "scroll",
      maxHeight: "80vh"
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid"
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid"
    },
    img: {
      maxWidth: "100%"
    }
  }
};
