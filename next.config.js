const withPlugins = require("next-compose-plugins");

const withCSS = require("@zeit/next-css");
// (
//   withPurgeCss({
//     purgeCssPaths: [
//       "./posts/**/*",
//       "./components/**/*",
//       "./pages/**/*",
//       "./public/**/*",
//       "./styles/*/**"
//     ]
//   })
// );

const withMDX = require("@next/mdx")({
  extension: /\.(md|mdx)$/
});

const plugins = [withCSS, withMDX];
// module.exports = withMDX(
// withCSS(
// withPurgeCss({
//   purgeCssPaths: [
//     "pages/**/*",
//     "components/**/*",
//     "styles/**/*",
//     "public/**/*",
//     "theme.ts",
//     "posts/**/*"
//   ]
// }))
// );

module.exports = withPlugins(plugins);
