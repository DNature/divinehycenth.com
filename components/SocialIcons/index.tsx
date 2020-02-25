import * as React from "react";
import { IoLogoTwitter, IoLogoLinkedin, IoLogoGithub } from "react-icons/io";

import CustomLink from "../CustomLink";

const SocialIcons: React.FC = () => {
  return (
    <nav className="flex justify-end">
      <CustomLink href="//twitter.com/DivineHycenth" target="_blank">
        <IoLogoTwitter className="mx-2 text-gray-600 hover:text-gray-200 text-2xl" />
      </CustomLink>

      <CustomLink href="//www.linkedin.com/in/dnature" target="_blank">
        <IoLogoLinkedin className="mx-2 text-gray-600 hover:text-gray-200 text-2xl" />
      </CustomLink>
      <CustomLink href="//github.com/dnature" target="_blank">
        <IoLogoGithub className="mx-2 text-gray-600 hover:text-gray-200 text-2xl" />
      </CustomLink>
    </nav>
  );
};

export default SocialIcons;
