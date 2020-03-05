import React from "react";
import { NextPage } from "next";
import PropTypes from "prop-types";

import CustomLink from "../CustomLink";
import { IArticleCardProps } from "../../interfaces";

const ArticleCard: NextPage<IArticleCardProps> = ({ data }) => {
  return (
    <>
      {data.map((d, i) => (
        <CustomLink href={`/blog/[id]`} as={`/blog/${d.fileName}`} key={d.title + i}>
          <div className="max-w-sm rounded-md hover mx-auto overflow-hidden border-2 border-gray-200 shadow-md hover:shadow-xl sm:m-4 m-4 cursor-pointer bg-white">
            <div className="px-6 py-4">
              <h1 className="font-bold text-base md:text-lg lg:text-xl hover:text-link">{d.title}</h1>
              <p className="text-gray-700 text-sm">{d.summary}</p>
            </div>
            <div className="px-6 py-4">
              {d.tags.map((tag, i) => (
                <span
                  key={tag + i}
                  className="inline-block bg-gray-200 rounded-full px-2 py-0 text-xs font-semibold text-gray-700 mr-2 mb-1"
                >
                  {tag}
                </span>
              ))}
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
