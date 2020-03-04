import React from "react";
import { NextPage } from "next";

import CustomLink from "../CustomLink";

const Author: NextPage = () => {
  return (
    <>
      <hr className="bg-gray-700" />
      <span className="px-6 flex items-center opacity-50 hover:opacity-100 border-t">
        <img
          className="w-10 h-10 rounded-full mr-4"
          src="/images/avatar.png"
          alt="Avatar of Divine Hycenth"
        />
        <div className="text-sm">
          <CustomLink href="/about">
            <span className="leading-none hover:text-link">Divine Nature</span>
          </CustomLink>
          <span className="text-gray-600"> >>> Oct 10 </span>
        </div>
      </span>
    </>
  );
};

export default Author;
