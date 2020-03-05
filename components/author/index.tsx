import React from "react";
import { NextPage } from "next";


import CustomLink from "../CustomLink";
import data from '../../utils/author';

const Author: NextPage= () => {

  const { name, imageUrl 
  }= data;
  return (
    <>
      <hr className="border-0" />
      <span className="px-6 md:flex lg:flex items-center opacity-50 hover:opacity-100 border-t hidden">
        <img
          className="w-10 h-10 rounded-full mr-4"
          src={imageUrl}
          alt="Avatar of Divine Hycenth"
        />
        <div className="text-sm">
            <CustomLink href="/about">
              <span className="leading-none hover:text-link">{name}</span>
            </CustomLink>
        </div>
      </span>
    </>
  );
};


export default Author;
