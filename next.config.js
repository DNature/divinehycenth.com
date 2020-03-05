const withPlugins = require("next-compose-plugins");
const withMdxFm = require("next-mdx-frontmatter")({
  extension: /\.(md|mdx)$/
});

const withMDX = require("@next/mdx")({
  extension: /\.(md|mdx)$/
});

const plugins = [withMDX];
module.exports = withPlugins(plugins);
