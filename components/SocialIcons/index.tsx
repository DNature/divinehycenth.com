import * as React from "react";
import { FiTwitter, FiLinkedin, FiGithub } from "react-icons/fi";

import CustomLink from "../CustomLink";

const SocialIcons: React.FC = () => {
  return (
    <nav className="flex items-center justify-between lg:p-0 sm:p-2 md:p-6">
      <CustomLink href="/" className="">
        <h1 className="md:text-xl lg:text-lg text-gray-400 hover:text-gray-100">
          Divine Hycenth
        </h1>
      </CustomLink>
      <div className="flex">
        <CustomLink href="//twitter.com/DivineHycenth" target="_blank">
          <FiTwitter className="mx-2 md:text-2xl lg:text-2xl text-lg  text-gray-200 hover:text-white" />
        </CustomLink>

        <CustomLink href="//www.linkedin.com/in/dnature" target="_blank">
          <FiLinkedin className="mx-2 md:text-2xl lg:text-2xl text-lg text-gray-200 hover:text-white" />
        </CustomLink>
        <CustomLink href="//github.com/dnature" target="_blank">
          <FiGithub className="mx-2 md:text-2xl lg:text-2xl text-lg text-gray-200 hover:text-white" />
        </CustomLink>
      </div>
    </nav>
  );
};

export default SocialIcons;
