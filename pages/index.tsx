import * as React from "react";
import { NextPage } from "next";

import Layout from "../components/layouts";
import completeData from "../utils/posts";

import ArticleCard from "../components/articles/articleCard";
import CustomButton from '../components/CustomButton';

const size = 6;
const data = completeData.slice( 0, size )

const IndexPage: NextPage = () => {
  return (
    <>
      <Layout path="/" imageUrl="/images/avatar-small.png" title="I'm Divine Hycenth a full stack software developer creating open source projects and writing about modern JavaScript, Typescript, Graphql, Python, Node.js, and development."
>
        <h2 className="-mb-10 inline-block px-3 md:text-3xl text-2xl font-bold text-gray-700 mt-6">
          Recent Posts
        </h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 mt-12  mx-4 md:mx-0 lg:mx-0">
          <ArticleCard data={data}/>
        </div>
        <br/>
        <CustomButton href="/blog">LOAD MORE</CustomButton>
      </Layout>
    </>
  );
};

export default IndexPage;
