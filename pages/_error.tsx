import * as React from "react";
import { NextPage } from "next";

import Layout from "../components/layouts";
import completeData from "../utils/posts";

import RecentPosts from "../components/articles/recentArticles";

const size = 3;
const data = completeData.slice(0, size);

const ErrorPage: NextPage = () => {
  return (
    <>
      <Layout title="Divine Hycenth | Not Found">
        <div className="lg:px-64 md:px-40 sm:px-20 px-12 mx-auto text-center">
          <img src="/images/404.svg" alt="page not found" />
          <p className="text-xl text-link">OOPS. Looking for something?</p>
          <h2 className="text-4xl mb-10 text-gray-700">404 | Page Not Found</h2>
        </div>
        <hr className="border-2" />

        <h2 className="text-2xl text-gray-700">Recent Articles</h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2">
          <RecentPosts data={data} />
        </div>
      </Layout>
    </>
  );
};

export default ErrorPage;
