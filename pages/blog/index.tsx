import * as React from "react";
import { NextPage } from "next";

import Layout from "../../components/layouts";
import completeData from "../../utils/posts";

import ArticleCard from "../../components/articles/articleCard";

const IndexPage: NextPage = () => {
 
  return (
    <>
      <Layout
        path="/blog"
        image="/images/bg-works.jpg"
        caption="Blog"
        title="Divine Hycenth - Blog"
        description="Recent Blog posts"
        imageUrl="/images/bg-works.jpg"
      >
        <h2 className="-mb-10 px-6 md:text-3xl text-2xl font-bold text-gray-700">
          Recent Posts
        </h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 mt-12 mx-4 md:mx-0 lg:mx-0 gap-8">
          <ArticleCard data={completeData} />
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;
