import * as React from "react";
import PropTypes from "prop-types";

import Layout from "../components/Layout";
import { NextPage } from "next";
import { Post } from "../interfaces";
import { dataFetch } from "../utils/data-api";
import ArticleCard from "../components/articles/articleCard";

interface Props {
  articleData: Post[];
  pathname: string;
}

const IndexPage: NextPage<Props> = ({ pathname, articleData }) => {
  console.log({ pathname });
  if (!articleData) {
    return (
      <>
        <Layout
          isMain
          title="😃 Divine Hycenth 👋 Full Stack Software Developer"
        >
          <h1>No Posts found</h1>
        </Layout>
      </>
    );
  }

  return (
    <>
      <Layout isMain title="😃 Divine Hycenth 👋 Full Stack Software Developer">
        <div className="grid grid-cols-3 mt-12 ">
          <ArticleCard data={articleData} />
        </div>
      </Layout>
    </>
  );
};

IndexPage.getInitialProps = async ({ pathname }): Promise<Props> => {
  const articleData: Post[] = await dataFetch(
    "http://localhost:3000/api/posts"
  );

  return { articleData, pathname };
};

IndexPage.propTypes = {
  pathname: PropTypes.string.isRequired,
  articleData: PropTypes.array.isRequired
};

export default IndexPage;
