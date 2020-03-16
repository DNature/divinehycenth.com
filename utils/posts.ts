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
    author: {
      name: "Divine Hycenth",
      imageUrl: "/images/avatar.png"
    }
  },
  {
    title: "How to Reduce file sizes with Gulpjs",
    summary: "Learn how to automatically minify your files with gulpjs?.",
    readTime: "5 min read",
    fileName: "how-to-reduce-file-sizes-with-gulpjs",
    tags: ["#Gulpjs", "#Minify", "#Optimize"],
    createdAt: "Feb 5",
    author: {
      name: "Divine Hycenth",
      imageUrl: "/images/avatar.png"
    }
  },
  {
    title: "How to deploy nextjs project to netlify",
    summary:
      "A comprehensive guide on how to deploy your nextjs project to netlify.com which is a hosting platform",
    readTime: "5 min read",
    fileName: "deploy-nextjs-project-to-netlify",
    tags: ["#Deploy", "#netlify", "#nextjs", "#devops"],
    createdAt: "Jan 20",
    author: {
      name: "Divine Hycenth",
      imageUrl: "/images/avatar.png"
    }
  },
  {
    title: "Monorepo setup with Yarn workspaces in 2020",
    summary: "How to setup Yarn workspace for React, and React-Native(expo)",
    readTime: "11 min read",
    fileName: "yarn-workspace-monorepo",
    tags: ["#Monorepo", "#YarnWorkspace", "#React", "#React-Native", "#expo"],
    createdAt: "Jan 18",
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
      "A comprehensive guide on how to build or transform your react application into a progressive web application (PWA).",
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
    tags: ["#CSS", "#Minify Files", "#Purgecss", "#PostCSS"],
    author: {
      name: "Divine Hycenth",
      imageUrl: "/images/avatar.png"
    }
  }
];
export default ArticleData;
