import React from "react";
import { NextPage } from "next";
import PropTypes from 'prop-types'


import CustomLink from "../CustomLink";
import data from '../../utils/author';

const Author: NextPage= () => {

  const { name, imageUrl 
  }= data;
  return (
    <>
      <hr className="bg-gray-700" />
      <span className="px-6 flex items-center opacity-50 hover:opacity-100 border-t">
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

Author.propTypes = {
  data: PropTypes.any.isRequired
};

export default Author;
