import * as React from "react";
import { NextPage } from "next";

import Layout from "../components/layouts";
import completeData from "../utils/posts";

import RecentPosts from "../components/articles/recentArticles";

const size = 6;
const data = completeData.slice(0, size);

const Construction: NextPage = () => {
  return (
    <>
      <Layout title="Divine Hycenth | Not Found">
        <div className="lg:px-64 md:px-40 sm:px-20 px-12 mx-auto text-center">
          <img src="/images/construction.svg" alt="page under construction" />
          <h1 className="text-3xl mb-10 text-gray-700">This Page is under construction!</h1>
        </div>
        <hr className="border-2"/>

        <h1 className="text-2xl text-gray-700">Recent Articles</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2">
          <RecentPosts data={data} />
        </div>
      </Layout>
    </>
  );
};

export default Construction;
