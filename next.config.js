const withCSS = require("@zeit/next-css");
const withPurgeCss = require("next-purgecss");

const withMDX = require("@next/mdx")({
  extension: /\.(md|mdx)$/
});
module.exports = withCSS(
  withMDX()
  // withPurgeCss({
  //   purgeCssPaths: [
  //     "pages/**/*",
  //     "components/**/*",
  //     "other-components/**/*" // also scan other-components folder
  //   ]
  // })
);
