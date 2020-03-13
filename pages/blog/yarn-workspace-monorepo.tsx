import * as React from "react";
import { NextPage } from "next";

import BlogLayout from "../../components/layouts/blog";

// @ts-ignore
import MD from "../../posts/yarn-workspace-monorepo/yarn-workspace-monorepo.md";

const IndexPage: NextPage = () => {
  // window.scrollTo(0, 0);

  return (
    <>
      <BlogLayout
        description="How to setup Yarn workspace for React, and React-Native(expo) in 2020"
        title="Typescript setup for Yarn workspace with React, and React-Native"
        imageUrl="/images/blog/yarn-workspace/yarn-workspace.jpg"
      >
        <MD />
      </BlogLayout>
    </>
  );
};

export default IndexPage;
