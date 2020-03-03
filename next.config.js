const withPlugins = require("next-compose-plugins");
const withMdxFm = require("next-mdx-frontmatter")({
  extension: /\.(md|mdx)$/
});

const withCSS = require("@zeit/next-css");

const withMDX = require("@next/mdx")({
  extension: /\.(md|mdx)$/
});

const plugins = [withCSS, withMDX];
module.exports = withPlugins(plugins);
