import * as React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

import SocialIcons from "../SocialIcons";
import CustomLink from "../CustomLink";

const Minimal: NextPage<{ image?: string; caption?: string }> = ({
  image = "/images/bg-works.jpg",
  caption
}) => {
  const { pathname } = useRouter();
  return (
    <div className="relative bg-2">
      {/* <div className="custom-bg pt-5  relative top-0"> */}
      {image && (
        <>
          <div
            className="bg-black w-full h-full absolute top-0"
            style={{ zIndex: -1 }}
          />
          <div
            className="bg-image"
            style={{ backgroundImage: `url(${image})` }}
          />
        </>
      )}
      <header className="container pt-5  mx-auto md:px-10 lg:px-20 p-2 z-10">
        <SocialIcons />
        {caption && (
          <h2 className="text-6xl text-white text-center font-bold font-sans py-20 md:py-32">
            {caption}
          </h2>
        )}
        <>
          <div className="py-5">
            <CustomLink
              href={pathname === "/about" ? "/" : "/about"}
              className="px-2 text-white text-base hover:text-white pl-0"
            >
              {pathname === "/about" ? "Home" : "About"}
            </CustomLink>

            <CustomLink
              className="px-2 text-white text-base hover:text-white"
              href="/blog"
            >
              Articles
            </CustomLink>
            <CustomLink
              className="px-2 text-white text-base hover:text-white"
              href="/works"
            >
              Works
            </CustomLink>

            <CustomLink
              className="px-2 text-white text-base hover:text-white"
              href="/contact"
            >
              Contact
            </CustomLink>
          </div>
        </>
      </header>
    </div>
  );
};
Minimal.propTypes = {
  image: PropTypes.string,
  caption: PropTypes.string
};

export default Minimal;
