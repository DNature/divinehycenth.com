import * as React from "react";
import { NextPage } from "next";

import BlogLayout from "../../components/layouts/blog";

// @ts-ignore
import MD from "../../posts/react-pwa/react-progressive-web-app-(pwa).md";

const IndexPage: NextPage = () => {
  // window.scrollTo(0, 0);


  return (
    <>
      <BlogLayout
        title="Divine | Build a Progressive Web App with React.js"
        description="A guide on creating or converting your react application into a progressive web app.

"
imageUrl="/images/blog/react-pwa/react-pwa.jpg"
      >
        <MD />
      </BlogLayout>
    </>
  );
};

export default IndexPage;
