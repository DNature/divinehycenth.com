import * as React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";

import SocialIcons from "../SocialIcons";
import CustomLink from "../CustomLink";

const Main: NextPage = () => {
  const { pathname } = useRouter();

  return (
    <>
      <div className="md:pt-10 lg:pt-10 pt-3 bg-gray-300 relative custom-bg pb-10">
        <header className="container z-10 mx-auto md:px-6 lg:px-12 p-2">
          <>
            <SocialIcons />
            <div className="h-full lg:mt-20 md:mt-20 text-center md:px-32 lg:px-40 px-0">
              <h1 className="lg:text-5xl md:text-4xl text-2xl text-gray-200 custom-text">
                Hey, I'm Divine.
              </h1>
              <h1 className="lg:text-2xl md:text-xl text-base text-white">
                I'm a full stack software developer creating open source
                projects and writing about modern JavaScript, Typescript,
                Graphql, Python, Node.js, and development.
              </h1>
              <div className=" my-6 ">
                <CustomLink
                  className="custom-button-transparent px-8 py-3 text-white hover:text-white hover:shadow-2xl rounded-md shadow-xl hover:border-blue-300 border"
                  href="/about"
                >
                  About Me <span className="text-2xl"> &#10171;</span>
                </CustomLink>
              </div>
            </div>

            <div className="mt-12 h-auto">
              <CustomLink
                href={pathname === "/about" ? "/" : "/about"}
                className="px-2 text-base text-gray-300 hover:text-gray-100"
              >
                {pathname === "/about" ? "Home" : "About"}
              </CustomLink>

              <CustomLink
                className="px-2 text-base text-gray-300 hover:text-gray-100"
                href="/blog"
              >
                Articles
              </CustomLink>
              <CustomLink
                className="px-2 text-base text-gray-300 hover:text-gray-100"
                href="/construction"
              >
                Works
              </CustomLink>

              <CustomLink
                className="px-2 text-base text-gray-300 hover:text-gray-100"
                href="/construction"
              >
                Contact
              </CustomLink>
            </div>
          </>
        </header>
      </div>
    </>
  );
};

export default Main;
