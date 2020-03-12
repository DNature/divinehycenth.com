import React from "react";
import { NextPage } from "next";
import PropTypes from "prop-types";

import CustomLink from "../CustomLink";
import completeData from "../../utils/posts";

const RelatedArticles: NextPage<{ name: string }> = ({ name }) => {
  // const size = 2;
  const posts = completeData.slice(0, -1);
  const relatedPosts = posts.find(n => n.fileName === name);


  if (!relatedPosts) return null;
  return (
    <>
      <CustomLink
        href={`/blog/[name]`}
        as={`/blog/${relatedPosts.fileName}`}
        //   key={data.title + i}
      >
        <div className="max-w-sm rounded-md border-2 border-gray-300 hover mx-auto overflow-hidden shadow-md hover:shadow-xl hover:border-link border-2 border-transparent sm:m-4 m-4 cursor-pointer bg-white">
          <div className="px-6 py-4">
            <h2 className="font-bold text-base lg:text-lg hover:text-link">
              {relatedPosts.title}
            </h2>
            <p className="text-gray-700 text-sm">{relatedPosts.summary}</p>
          </div>
        </div>
      </CustomLink>
    </>
  );
};

RelatedArticles.propTypes = {
  name: PropTypes.string.isRequired
};

export default RelatedArticles;
