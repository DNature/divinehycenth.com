import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { NextPage } from "next";
import SocialIcons from '../SocialIcons';
import CustomLink from '../CustomLink';


interface Props {
  title?: string;
  isMain?: boolean;
}


const Header: NextPage<Props> = ({
  title = "This is the default title",
  isMain
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className={`${isMain ? "main" : "minimal"} py-6 relative`}>
        <div className="main-background container  mx-auto">
          <>
            <SocialIcons />
            {isMain && (
              <div className="h-full mt-20 text-center md:px-48 lg:px-56 px-16">
                <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-4xl text-white">
                  Hey, I'm Divine.
                </h1>
                <h1 className="lg:text-3xl md:text-2xl sm:text-2xl text-lg text-white">
                  I'm a full stack software developer creating open source
                  projects and writing about modern JavaScript, Typescript,
                  Graphql, Python, Node.js, and development.
                  I'm alse a huje fan of JAMStack
                </h1>
              </div>
            )}

            <div className="mt-12 h-auto absolute bottom-0 pb-5">
              <CustomLink
                href="/"
                className="px-2 text-gray-500 text-lg hover:text-gray-100"
              >
                Home
              </CustomLink>
              <CustomLink
                className="px-2 text-gray-500 text-lg hover:text-gray-100"
                href="/about"
              >
                About
              </CustomLink>

              <CustomLink
                className="px-2 text-gray-500 text-lg hover:text-gray-100"
                href="/blog"
              >
                Articles
              </CustomLink>

              <CustomLink
                className="px-2 text-gray-500 text-lg hover:text-gray-100"
                href="/contact"
              >
                Contact
              </CustomLink>
            </div>
          </>
        </div>
      </header>
    </>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  isMain: PropTypes.bool
};

export default Header;
