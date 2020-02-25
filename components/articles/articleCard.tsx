import React from "react";
import { NextPage } from "next";
import PropTypes from "prop-types";

import { Post } from "../../interfaces";

interface Props {
  data: Post[];
}

const ArticleCard: NextPage<Props> = ({ data }) => {
  return (
    <>
      {data.map((data, index) => (
        <div
          key={data.title + index}
          className="max-w-sm rounded-md hover overflow-hidden hover:shadow-2xl m-4 cursor-pointer"
        >
          <img
            className="w-full"
            src={data.imageUrl}
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{data.title}</div>
            <p className="text-gray-700 text-base">{data.subTitle}</p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              #winter
            </span>
          </div>
        </div>
      ))}
    </>
  );
};

ArticleCard.propTypes = {
  data: PropTypes.array.isRequired
};

export default ArticleCard;
