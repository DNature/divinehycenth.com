import React from "react";
import { NextPage } from "next";

import data from "../../utils/posts";
import CustomLink from "../CustomLink";

const ArticleCard: NextPage = () => {
  return (
    <>
      {data.map((data, index) => (
        <CustomLink
          // prefetch
          href={`/blog/[id]`}
          as={`/blog/${data.fileName}`}
          key={data.title + index}
        >
          <div className="max-w-sm rounded-md hover mx-auto overflow-hidden shadow-md hover:shadow-2xl sm:m-4 m-4 cursor-pointer bg-white">
            {/* <img
              className="w-full"
              src={data.imageUrl}
              alt="Sunset in the mountains"
            /> */}
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
        </CustomLink>
      ))}
    </>
  );
};

export default ArticleCard;
