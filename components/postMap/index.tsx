import React from "react";
import { NextPage } from "next";
import PropTypes from "prop-types";

import { IArticleCardProps } from "../../interfaces";

const PostMap: NextPage<IArticleCardProps & {children: React.ReactNode}> = ({ data, children }) => {
  return (
    <>
      {data.map((d, i) => (
        <span key={d.title + i} {...d}>{children}</span>
      ))}
    </>
  );
};

PostMap.propTypes = {
  data: PropTypes.array.isRequired,
  children: PropTypes.node.isRequired,
};

export default PostMap;
