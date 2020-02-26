import * as React from "react";
import { NextPage } from "next";
import PropTypes from "prop-types";
import ArticleData from "../../utils/posts";

interface Props {
  post: string;
  children: React.ReactNode;
}

const RenderPostContainer: NextPage<Props> = ({ post, children }) => {
  const postMeta = ArticleData.find(data => data.fileName === post);
  if (!postMeta) return null;

  if (postMeta.fileName === post) {
    return <>{children}</>;
  }
  return null;
};

RenderPostContainer.propTypes = {
  post: PropTypes.string.isRequired,
  children: PropTypes.number.isRequired
};
export default RenderPostContainer;
