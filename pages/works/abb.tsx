import * as React from "react";
import { NextPage } from "next";

import BlogLayout from "../../components/layouts/blog";

// @ts-ignore
import MD from "../../posts/react-pwa/react-progressive-web-app-(pwa).md";

const Abb: NextPage = () => {
  // window.scrollTo(0, 0);

  return (
    <>
      <BlogLayout title="Divine | Build a Progressive Web App with React.js">
        <MD />
      </BlogLayout>
    </>
  );
};

export default Abb;
