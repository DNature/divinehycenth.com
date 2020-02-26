import * as React from "react";
import { FiTwitter, FiLinkedin, FiGithub } from "react-icons/fi";

import CustomLink from "../CustomLink";

const SocialIcons: React.FC = () => {
  return (
    <nav className="flex items-center justify-between lg:p-0 p-6">
      <CustomLink href="/" className="">
        <h1 className="text-xl text-gray-400 hover:text-gray-100">
          Divine Hycenth
        </h1>
      </CustomLink>
      <div className="flex">
        <CustomLink href="//twitter.com/DivineHycenth" target="_blank">
          <FiTwitter className="mx-2 text-2xl  text-gray-500 hover:text-gray-200" />
        </CustomLink>

        <CustomLink href="//www.linkedin.com/in/dnature" target="_blank">
          <FiLinkedin className="mx-2 text-2xl text-gray-500 hover:text-gray-200" />
        </CustomLink>
        <CustomLink href="//github.com/dnature" target="_blank">
          <FiGithub className="mx-2 text-2xl text-gray-500 hover:text-gray-200" />
        </CustomLink>
      </div>
    </nav>
  );
};

export default SocialIcons;
