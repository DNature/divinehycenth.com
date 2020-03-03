import React from "react";
import { NextPage } from "next";

import CustomLink from "../CustomLink";

const Author: NextPage = () => {
  return (
    <>
      <CustomLink href="/about">
        <div className="px-6 flex items-center opacity-50 hover:opacity-100">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src="/images/avatar.png"
            alt="Avatar of Divine Hycenth"
          />
          <div className="text-sm">
            <p className="text-gray-700 leading-none ">Divine Nature</p>
            <p className="text-gray-700">10 Oct</p>
          </div>
        </div>
      </CustomLink>
    </>
  );
};

export default Author;
