import * as React from "react";
import { NextPage } from "next";
import PropTypes from "prop-types";

import Layout from ".";

interface Props {
  children: React.ReactNode;
  title?: string;
  description?: string;
  imageUrl?: string;
}

const BlogLayout: NextPage<Props> = ({ children, title, description, imageUrl }) => {
  

  return (
    <>
      <Layout title={title} description={description} imageUrl={imageUrl}>
        <article className="lg:px-32 md:px-10 mt-10">{children}</article>
      </Layout>
    </>
  );
};

BlogLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
};

export default BlogLayout;
