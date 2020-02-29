import * as React from "react";
import { NextPage } from "next";
import SocialIcons from "../SocialIcons";
import CustomLink from "../CustomLink";

const Main: NextPage = () => {
  return (
    <>
      <div className="pt-10 bg-gray-300 h-full relative custom-bg">
        <header className="container z-10 mx-auto md:px-6 lg:px-12 p-2">
          <>
            <SocialIcons />
            <div className="h-full mt-20 text-center md:px-32 lg:px-40 px-16">
              <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-4xl text-gray-200">
                Hey, I'm Divine.
              </h1>
              <h1 className="lg:text-3xl md:text-2xl sm:text-2xl text-lg text-white">
                I'm a full stack software developer creating open source
                projects and writing about modern JavaScript, Typescript,
                Graphql, Python, Node.js, and development. I'm alse a huge fan
                of JAMStack
              </h1>
            </div>

            <div className="mt-12 h-auto pb-5">
              <CustomLink
                href="/"
                className="px-2 text-gray-300 text-lg hover:text-gray-100"
              >
                Home
              </CustomLink>
              <CustomLink
                className="px-2 text-gray-300 text-lg hover:text-gray-100"
                href="/about"
              >
                About
              </CustomLink>

              <CustomLink
                className="px-2 text-gray-300 text-lg hover:text-gray-100"
                href="/blog"
              >
                Articles
              </CustomLink>

              <CustomLink
                className="px-2 text-gray-300 text-lg hover:text-gray-100"
                href="/contact"
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
