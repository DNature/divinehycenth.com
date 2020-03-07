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
        description="How to setup Yarn workspace for Nodejs, React, and React-Native in 2020"
        title="How to setup Yarn workspace for Nodejs, React, and React-Native"
      >
        <MD />
      </BlogLayout>
    </>
  );
};

export default IndexPage;
