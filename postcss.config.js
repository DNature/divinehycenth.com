module.exports = {
  plugins: [
    "tailwindcss",
    "autoprefixer",
    "cssnano",
    process.env.NODE_ENV === "production"
      ? [
          "@fullhuman/postcss-purgecss",
          {
            content: [
              "./pages/**/*.{ts,tsx,md,mdx}",
              "./components/**/*.{ts,tsx,md,mdx}",
              "./theme.ts",
              "./styles/tailwind.css",
              "./posts/**/*.{md,mdx}"
              // "./**/*.{tsx,ts}"
            ],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
          }
        ]
      : undefined,
    "postcss-preset-env"
  ]
};

// module.exports = {
//   plugins: [
//     require("postcss-import"),
//     require("tailwindcss"),
//     process.env.NODE_ENV === "production" ? require("autoprefixer") : null,
//     process.env.NODE_ENV === "production"
//       ? cssnano({
//           preset: "default"
//         })
//       : null,
//     process.env.NODE_ENV === "production"
//       ? purgecss({
//           content: [
//             "./components/**/*.tsx",
//             "./posts/**/*.mdx",
//             "./posts/**/*.md",
//             "./pages/**/*.tsx",
//             "./theme.ts",
//             "./styles/tailwind.css",
//             "./tailwind.config.js"
//           ],
//           defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
//         })
//       : null
//   ]
// };
