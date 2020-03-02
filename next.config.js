const withCSS = require("@zeit/next-css");
const withPurgeCss = require("next-purgecss");

const withMDX = require("@next/mdx")({
  extension: /\.(md|mdx)$/
});
module.exports = withMDX(
  withCSS(),
  withPurgeCss({
    purgeCssPaths: ["pages/**/*", "components/**/*", "styles/**/*", "public/**/*", "theme.ts", "posts/**/*"]
  })
);
