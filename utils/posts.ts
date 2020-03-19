import { IBlogPost } from "../interfaces";

const ArticleData: IBlogPost[] = [
  {
    title: "Handling File Uploads with Apollo Server 2.0",
    summary:
      "A comprehensive guide on how to upload files to Apollo-server 2.0.",
    readTime: "8 min read",
    fileName: "file-uploads-with-apolloserver-2",
    tags: ["#Upload", "#Files", "#Apollo Server", "#Javascript"],
    createdAt: "Feb 5",
    imageUrl: "/images/blog/file-uploads-with-apolloserver-2/apollo-upload.jpg"
  },
  {
    title: "How to Reduce file sizes with Gulpjs",
    summary: "Learn how to automatically minify your files with gulpjs?.",
    readTime: "5 min read",
    fileName: "how-to-reduce-file-sizes-with-gulpjs",
    tags: ["#Gulpjs", "#Minify", "#Optimize"],
    createdAt: "Feb 5",
    imageUrl:
      "/images/blog/how-to-reduce-file-sizes-with-gulpjs/how-to-reduce-file-sizes-with-gulpjs.jpg"
  },
  {
    title: "How to deploy nextjs project to netlify",
    summary:
      "A comprehensive guide on how to deploy your nextjs project to netlify.com which is a hosting platform",
    readTime: "5 min read",
    fileName: "deploy-nextjs-project-to-netlify",
    tags: ["#Deploy", "#netlify", "#nextjs", "#devops"],
    createdAt: "Jan 20",
    imageUrl: "/images/blog/deploy-to-netlify/deploy-nextjs-netlify.jpg"
  },
  {
    title: "Monorepo setup with Yarn workspaces in 2020",
    summary: "How to setup Yarn workspace for React, and React-Native(expo)",
    readTime: "11 min read",
    fileName: "yarn-workspace-monorepo",
    tags: ["#Monorepo", "#YarnWorkspace", "#React", "#React-Native", "#expo"],
    createdAt: "Jan 18",
    imageUrl: "/images/blog/yarn-workspace/yarn-workspace.jpg"
  },
  {
    title: "Setup Tailwind, and PurgeCSS in Nextjs",
    summary:
      "How to setup your Nextjs project with tailwindcss, purgecss, autoprefixer and postcss",
    readTime: "6 min read",
    fileName: "how-to-setup-tailwind-purgecss-and-nextjs",
    tags: ["#Tailwind", "#Purgecss", "#Nextjs"],
    createdAt: "Jan 9",
    imageUrl:
      "/images/blog/how-to-setup-tailwind-purgecss-and-nextjs/how-to-setup-tailwind-purgecss-and-nextjs.jpg"
  },
  {
    title: "Build a Progressive Web App(PWA) with React",
    summary:
      "A comprehensive guide on how to build or transform your react application into a progressive web application (PWA).",
    readTime: "12 min read",
    fileName: "react-progressive-web-app-(pwa)",
    tags: ["#PWA", "#Progressive web app", "#React app (PWA)"],
    createdAt: "Jan 6",
    imageUrl: "/images/blog/react-pwa/react-pwa.jpg"
  },
  {
    title: "Remove all unused CSS",
    summary:
      "A reference guide on how to remove unused CSS classes, Minify CSS files to reduce your website's loading time.. %",
    readTime: "5 min read",
    fileName: "remove-all-unused-css",
    createdAt: "Dec 24",
    tags: ["#CSS", "#Minify Files", "#Purgecss", "#PostCSS"],
    imageUrl: "/images/blog/remove-unused-css/remove-unused.jpg"
  }
];
export default ArticleData;
