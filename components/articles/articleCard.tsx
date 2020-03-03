import React from "react";
import { NextPage } from "next";
import PropTypes from "prop-types";

import CustomLink from "../CustomLink";
import { IArticleCardProps } from "../../interfaces";

const ArticleCard: NextPage<IArticleCardProps> = ({ data }) => {
  return (
    <>
      {data.map((data, i) => (
        <CustomLink
          href={`/blog/[id]`}
          as={`/blog/${data.fileName}`}
          key={data.title + i}
        >
          <div className="max-w-sm rounded-md hover mx-auto overflow-hidden shadow-md hover:shadow-xl sm:m-4 m-4 cursor-pointer bg-white">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{data.title}</div>
              <p className="text-gray-700 text-sm">{data.summary}</p>
            </div>
            <div className="px-6 py-4">
              {data.tags.map((tag, i) => (
                <span
                  key={tag + i}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-1"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="px-6 flex items-center">
              <img
                className="w-10 h-10 rounded-full mr-4"
                src="/images/avatar.png"
                alt="Avatar of Divine Hycenth"
              />
              <div className="text-sm">
                <p className="text-gray-500 leading-none ">Divine Nature</p>
                <p className="text-gray-400">{data.createdAt}</p>
              </div>
            </div>
          </div>
        </CustomLink>
      ))}
    </>
  );
};

ArticleCard.propTypes = {
  data: PropTypes.array.isRequired
};

export default ArticleCard;
