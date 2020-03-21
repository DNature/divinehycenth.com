import React from "react";
import { NextPage } from "next";
import { FiLinkedin, FiTwitter, FiGithub } from "react-icons/fi";
import { FaStackOverflow } from "react-icons/fa";

import CustomLink from '../CustomLink';

const Footer: NextPage = () => {
  return (
    <footer className="mt-20" style={{ justifySelf: "flex-start" }}>
      <div className="container text-center mx-auto flex flex-col items-center">
        <div className="mx-auto flex justify-between pt-6">
          <CustomLink
            className="text-2xl mx-2 text-white hover:text-primary-25"
            href="http://twitter.com/DivineHycenth"
            target="_blank"
          >
            <FiTwitter />
          </CustomLink>
          <CustomLink
            className="text-2xl mx-2 text-white hover:text-primary-25"
            href="http://github.com/dnature"
            target="_blank"
          >
            <FiGithub />
          </CustomLink>
          <CustomLink
            className="text-2xl mx-2 text-white hover:text-primary-25"
            href="http://www.linkedin.com/in/dnature"
            target="_blank"
          >
            <FiLinkedin />
          </CustomLink>
          <CustomLink
            className="text-2xl mx-2 text-white hover:text-primary-25"
            href="https://stackoverflow.com/users/11624868/divine-hycenth"
            target="_blank"
          >
            <FaStackOverflow />
          </CustomLink>
        </div>
        <hr />
        <br />
        <span className="text-white pb-10">
          <CustomLink href="/">
            &copy; Copyright 2020: Divine Hycenth
          </CustomLink>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
