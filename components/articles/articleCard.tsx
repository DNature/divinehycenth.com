import React from "react";
import { NextPage } from "next";
import PropTypes from "prop-types";

import CustomLink from "../CustomLink";
import { IArticleCardProps } from "../../interfaces";

const ArticleCard: NextPage<IArticleCardProps> = ({ data }) => {
  return (
    <>
      {data.map((d, i) => (
        <CustomLink
          href={`/blog/[id]`}
          as={`/blog/${d.fileName}`}
          key={d.title + i}
        >
          <div className="max-w-sm card-height hover:transition ease-out duration-100 rounded-md hover mx-auto overflow-hidden shadow-md hover:shadow-xl cursor-pointer bg-white">
            <div className="h-48 bg-black">
              <div
                className="card-bg"
                style={{ background: `url(${d.imageUrl})` }}
              />
            </div>

            <h2 className="p-4 font-bold text-base md:text-md lg:text-lg hover:text-link">
              {d.title}
            </h2>

            <p className="px-4 text-gray-50 hover:text-gray-50 text-base">
              {d.summary}
            </p>

            <p className="px-4 text-primary-100 pt-4 hover:text-primary-50">Read More →</p>
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

/*

 <img src={d.author.imageUrl} alt={d.title}/> 
            <div className="px-6 py-4">
              
              <h2 className="font-bold text-base md:text-md lg:text-lg hover:text-link">
                {d.title}
              </h2>
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
            */
