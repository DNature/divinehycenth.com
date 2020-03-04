import React from "react";
import { NextPage } from "next";
import PropTypes from "prop-types";

import CustomLink from "../CustomLink";
import { IArticleCardProps } from "../../interfaces";

const RecentPosts: NextPage<IArticleCardProps> = ({ data }) => {
    const size = 3;
    const recentPosts = data.slice(0, size);
  return (
    <>
      {recentPosts.map((data, i) => (
        <CustomLink
          href={`/blog/[id]`}
          as={`/blog/${data.fileName}`}
          key={data.title + i}
        >
          <div className="max-w-sm rounded-md hover mx-auto overflow-hidden shadow-md hover:shadow-xl hover:border-link border-2 border-transparent sm:m-4 m-4 cursor-pointer bg-white">
            <div className="px-6 py-4">
              <h1 className="font-bold text-xl hover:text-link">
                {data.title}
              </h1>
              <p className="text-gray-700 text-sm">{data.summary}</p>
            </div>
                      </div>
        </CustomLink>
      ))}
    </>
  );
};

RecentPosts.propTypes = {
  data: PropTypes.array.isRequired
};

export default RecentPosts;
