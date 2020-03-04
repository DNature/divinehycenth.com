import React from "react";
import { NextPage } from "next";

import CustomLink from "../CustomLink";

const CustomButton: NextPage = () => {
  return (
    <>
      <div className="container mx-auto text-center">
        <CustomLink href="/blog">
          <button className="custom-button px-10 py-1 rounded-md bg-gray-600 text-white shadow-lg hover:shadow-2xl">
            LOAD MORE
          </button>
        </CustomLink>
      </div>
    </>
  );
};

export default CustomButton;
