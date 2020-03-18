import * as React from "react";
import { NextPage } from "next";

import BlogLayout from "../../components/layouts/blog";

// @ts-ignore
import MD from "../../posts/how-to-reduce-file-sizes-with-gulpjs/how-to-reduce-file-sizes-with-gulpjs.md";

const IndexPage: NextPage = () => {
  // window.scrollTo(0, 0);

  return (
    <>
      <BlogLayout
        description="Learn how to minify file sizes with gulpjs"
        title="How to reduce file sizes with gulpjs"
        imageUrl="/images/blog/how-to-reduce-file-sizes-with-gulpjs/how-to-reduce-file-sizes-with-gulpjs.jpg"
        path="/blog/how-to-reduce-file-sizes-with-gulpjs"
      >
        <MD />
        
      </BlogLayout>
    </>
  );
};

export default IndexPage;
