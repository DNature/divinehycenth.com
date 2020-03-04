import React from "react";
import { NextPage } from "next";
import PropTypes from "prop-types";

import CustomLink from "../CustomLink";
import completeData from "../../utils/posts";

const size = 3;
const posts = completeData.slice(0, size);

const RelatedArticles: NextPage<{ name: string }> = ({ name }) => {
  const relatedPosts = posts.find(n => n.fileName === name);
  if (!relatedPosts) return null;
  console.log(relatedPosts.fileName);
  return (
    <>
      <CustomLink
        href={`/blog/[id]`}
        as={`/blog/${relatedPosts.fileName}`}
        //   key={data.title + i}
      >
        <div className="max-w-sm rounded-md hover mx-auto overflow-hidden shadow-md hover:shadow-xl hover:border-link border-2 border-transparent sm:m-4 m-4 cursor-pointer bg-white">
          <div className="px-6 py-4">
            <h1 className="font-bold text-xl hover:text-link">
              {relatedPosts.title}
            </h1>
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
