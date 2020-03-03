// @ts-nocheck
import * as React from "react";
import { NextPage } from "next";

import BlogLayout from "../../components/layouts/blog";

import * as ReactPWA from "../../posts/react-pwa/react-progressive-web-app-(pwa).md";
import * as About from "../../posts/about-me.md";
import { useRouter } from 'next/router';

const IndexPage: NextPage = () => {
  // window.scrollTo(0, 0);
  const router = useRouter()
  const MD = [About, ReactPWA];

  
  return (
    <>
      <BlogLayout title="Divine | Build a Progressive Web App with React.js">
        {
          MD.map(M => {
            console.log(M.meta)
              return M.meta.name === router.query.id && <M key={M.meta.name}/>
            })
        }
      </BlogLayout>
    </>
  );
};

export default IndexPage;
