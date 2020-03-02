import * as React from "react";
import { NextPage } from "next";
import PropTypes from "prop-types";

import Layout from "../../components/layouts";

interface Props {
  children: React.ReactNode;
  title?: string;
}

const BlogLayout: NextPage<Props> = ({ children, title }) => {
  return (
    <>
      <Layout title={title}>
        <div className="lg:px-32 md:px-10 mt-10">{children}</div>
      </Layout>
    </>
  );
};

BlogLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string
};

export default BlogLayout;
