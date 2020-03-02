import * as React from "react";
import { NextPage } from "next";

import BlogLayout from "../../components/layouts/blog";

// @ts-ignore
import MD from "../../posts/react-pwa/react-progressive-web-app-(pwa).md";

const IndexPage: NextPage = () => {
  return (
    <>
      <BlogLayout title="Divine | Depoly to Zeit">
        <MD />
      </BlogLayout>
    </>
  );
};

export default IndexPage;
