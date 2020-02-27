const withCSS = require("@zeit/next-css");
const withMDX = require("@next/mdx")({
  extension: /\.(md|mdx)$/
});
module.exports = withCSS(withMDX());
