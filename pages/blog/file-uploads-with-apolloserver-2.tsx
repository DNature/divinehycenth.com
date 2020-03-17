import * as React from "react";
import { NextPage } from "next";

import BlogLayout from "../../components/layouts/blog";

// @ts-ignore
import MD from "../../posts/file-uploads-with-apolloserver-2/file-uploads-with-apolloserver-2.md";

const IndexPage: NextPage = () => {
  // window.scrollTo(0, 0);

  return (
    <>
      <BlogLayout
        description="A comprehensive guide on how to upload files to Apollo-server 2.0."
        title="Handling File Uploads with Apollo Server 2.0"
        imageUrl="/images/blog/file-uploads-with-apolloserver-2/apollo-upload.jpg"
        path="/file-uploads-with-apolloserver-2"
      >
        <MD />
      </BlogLayout>
    </>
  );
};

export default IndexPage;
