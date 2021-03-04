const path = require('path');

const withPlugins = require('next-compose-plugins');
const withMdx = require('next-mdx-enhanced');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const { getEditUrl } = require('@docusaurus/utils');

const {getLastEdited, getDateCreated, fileToPath, getGithubUserData} = require("./src/utils/mdx-utils")

const EDIT_URL =  'https://github.com/dnature/divinehycenth.com/edit/develop/pages';


const calcReadTime = (content) => {
  const wordsPerMinute = 275;
  const words = content.split(' ');
  const textLength = words.length || 1;

  return Math.ceil(textLength / wordsPerMinute);
}


const defaultConfig = {
  target: 'serverless',
  webpack: (config) => ({
    ...config,
    externals: [...config.externals, 'sharp'],
  }),
  experimental: {
    optimizeFonts: true,
    modern: true,
  },
};

const mdxConfig = {
  layoutDir: 'layouts',
  defaultLayout: true,
  fileExtensions: ['mdx'],
  remarkPlugins: [
    require('remark-autolink-headings'),
    require('remark-emoji'),
    require('remark-images'),
    require('remark-slug'),
    require('remark-toc'),
    require('remark-unwrap-images'),
    // require('remark-prism'),
  ],
  extendFrontMatter: {
    process: async (content, matter) => {
      const { __resourcePath: mdxPath, author, tags } = matter;

      // Read the file path
      const filePath = path.join(process.cwd(), 'pages', mdxPath);

      // get the last edited author and date
      const lastEdited = await getLastEdited(filePath);

      // get publish date
      const published = await getDateCreated(filePath);

      // get the edit url
      const editUrl = getEditUrl(mdxPath, EDIT_URL);

      // get the slug
      const slug = fileToPath(mdxPath);

      // If frontMatter includes author, add the author's data
      const authorData = author ? await getGithubUserData(author) : undefined;

      const readTime = calcReadTime(content)

      return {
        slug,
        lastEdited,
        published,
        editUrl,
        auth: authorData,
        tags,
        readTime
      };
    },
  },
};

module.exports = withPlugins(
  [withBundleAnalyzer, withMdx(mdxConfig)],
  defaultConfig,
);
