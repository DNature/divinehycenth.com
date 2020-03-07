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
}

const MainLayout: NextPage<Props> = ({ children, title, description }) => {
  const {pathname} = useRouter()

  return (
    <>
      <NextHead pageTitle={title} description={description}/>
      <div className="flex flex-col h-full" style={{ height: "100vh" }}>
        <Header />
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
};

export default MainLayout;
