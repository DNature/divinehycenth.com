import { IBlogPost } from "../interfaces";

const ArticleData: IBlogPost[] = [
  {
    title: "Build a Progressive Web App(PWA) with React",
    summary:
      "A comprehensive guide on how to build or transform your react application into a progressive web application (PWA) with examples.",
    imageUrl: "/images/avatar.jpg",
    readTime: "8 min read",
    fileName: "react-progressive-web-app-(pwa)",
    tags: ["#PWA", "#Progressive web app", "#React app (PWA)"],
    createdAt: "Oct 10"
  },
  {
    title: "Remove all unused CSS",
    summary:
      "A reference guide on how to remove unused CSS classes, Minify CSS files and reduce your website's loading time by 70%",
    imageUrl: "/images/remove-unused-css/remove-unused.jpg",
    readTime: "9 min read",
    fileName: "remove-all-unused-css",
    createdAt: "Oct 16",
    tags: ["#CSS", "#Minify Files", "#Sass", "#React"]
  },
  {
    title: "Setup Tailwind, and PurgeCSS in nextjs",
    summary:
      "Build an API driven static-site with Gatsby.js and use Ghost as a completely decoupled headless CMS. Read more about how it works and how to use this starter theme here!",
    imageUrl: "/images/home-bg.jpg",
    readTime: "12 min read",
    fileName: "git-cli",
    createdAt: "Oct 16",
    tags: ["#PWA", "#Progressive web app", "#React app (PWA)"]
  }
];
export default ArticleData;
