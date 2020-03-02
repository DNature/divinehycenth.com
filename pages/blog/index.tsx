import * as React from "react";
import { NextPage } from "next";

import Layout from "../../components/layouts";
import completeData from "../../utils/posts";

import ArticleCard from "../../components/articles/articleCard";

const IndexPage: NextPage = () => {
  return (
    <>
      <Layout>
        <h1 className="-mb-10 px-6 md:text-3xl text-2xl font-bold text-gray-700">
          Blog Posts
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 mt-12">
          <ArticleCard data={completeData} />
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;
