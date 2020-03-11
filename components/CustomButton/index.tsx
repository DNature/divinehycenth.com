import React from "react";
import { NextPage } from "next";
import PropTypes from 'prop-types'

import CustomLink from "../CustomLink";

interface Props {
  children: React.ReactNode;
  href: string;
}

const CustomButton: NextPage<Props> = ({children, href}) => {
  return (
    <>
      <div className="container mx-auto text-center">
        <CustomLink href={href}>
          <button className="custom-button px-10 py-1 rounded-md bg-gray-600 text-white shadow-lg hover:shadow-2xl">
            {children}
          </button>
        </CustomLink>
      </div>
    </>
  );
};

CustomButton.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
}

export default CustomButton;
