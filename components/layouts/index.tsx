import * as React from "react";
import PropTypes from "prop-types";
import { NextPage } from "next";
import { useRouter } from 'next/router';

import Header from "../header";
import Footer from "../footer";
import NextHead from "../header/head";

interface Props {
  title?: string;
  children?: React.ReactNode;
  description?: string;
  imageUrl?: string;
  image?: string;
  caption?: string;
  path?: string;
}

const MainLayout: NextPage<Props> = ({ path,children, title, description, imageUrl, image, caption }) => {
  const {pathname} = useRouter()

  return (
    <>
      <NextHead pageTitle={title} path={path} description={description} imageUrl={imageUrl}/>
      <div className="flex flex-col h-full" style={{ height: "100vh" }}>
        <Header image={image} caption={caption} />
        <main className={pathname !== "/works" ? "container mx-auto h-auto md:px-10 p-2 flex-1 bg-white rounded-md" : undefined}>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

MainLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  image: PropTypes.string,
  caption: PropTypes.string,
  path: PropTypes.string,
};

export default MainLayout;
