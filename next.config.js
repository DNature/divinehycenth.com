const withPlugins = require("next-compose-plugins");
const images = require("next-images");

const withMDX = require("@next/mdx")({
  extension: /\.(md|mdx)$/
});

const plugins = [withMDX, images];
module.exports = withPlugins(plugins);
