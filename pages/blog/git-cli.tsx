import * as React from "react";
import { NextPage } from "next";

import BlogLayout from "../../components/layouts/blog";

// @ts-ignore
import MD from "../../posts/git-cli.md";

const IndexPage: NextPage = () => {
  return (
    <>
      <BlogLayout title="Divine | Git CLI">
        <MD />
      </BlogLayout>
    </>
  );
};

export default IndexPage;
