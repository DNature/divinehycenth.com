import * as React from "react";
import { NextPage } from "next";

import BlogLayout from "../../components/layouts/blog";

// @ts-ignore
import MD from "../../posts/deploy-nextjs-project-to-netlify/deploy-nextjs-project-to-netlify.md";

const IndexPage: NextPage = () => {
  // window.scrollTo(0, 0);

  return (
    <>
      <BlogLayout
        description="How to deploy Nextjs project to Netlify. A comprehensive guide on how to deploy your nextjs application to netlify which is another great alternative to now"
        title="How to deploy nextjs project to netlify"
        imageUrl="/images/blog/deploy-to-netlify/deploy-nextjs-netlify.jpg"
      >
        <MD />
      </BlogLayout>
    </>
  );
};

export default IndexPage;
