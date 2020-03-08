import { IBlogPost } from "../interfaces";

const ArticleData: IBlogPost[] = [
  {
    title: "Monorepo setup with Yarn workspaces in 2020",
    summary: "How to setup Yarn workspace for React, and React-Native(expo)",
    readTime: "9 min read",
    fileName: "yarn-workspace-monorepo",
    tags: ["#Monorepo", "#YarnWorkspace", "#React", "#React-Native", "#expo"],
    createdAt: "Jan 9",
    author: {
      name: "Divine Hycenth",
      imageUrl: "/images/avatar.png"
    }
  },
  {
    title: "Setup Tailwind, and PurgeCSS in Nextjs",
    summary:
      "How to setup your Nextjs project with tailwindcss, purgecss, autoprefixer and postcss",
    readTime: "6 min read",
    fileName: "how-to-setup-tailwind-purgecss-and-nextjs",
    tags: ["#Tailwind", "#Purgecss", "#Nextjs"],
    createdAt: "Jan 9",
    author: {
      name: "Divine Hycenth",
      imageUrl: "/images/avatar.png"
    }
  },
  {
    title: "Build a Progressive Web App(PWA) with React",
    summary:
      "A comprehensive guide on how to build or transform your react application into a progressive web application (PWA) with examples.",
    readTime: "12 min read",
    fileName: "react-progressive-web-app-(pwa)",
    tags: ["#PWA", "#Progressive web app", "#React app (PWA)"],
    createdAt: "Jan 6",
    author: {
      name: "Divine Hycenth",
      imageUrl: "/images/avatar.png"
    }
  },
  {
    title: "Remove all unused CSS",
    summary:
      "A reference guide on how to remove unused CSS classes, Minify CSS files to reduce your website's loading time.. %",
    readTime: "5 min read",
    fileName: "remove-all-unused-css",
    createdAt: "Dec 24",
    tags: ["#CSS", "#Minify Files", "#Purgecss"],
    author: {
      name: "Divine Hycenth",
      imageUrl: "/images/avatar.png"
    }
  }
];
export default ArticleData;
