import * as React from "react";
import PropTypes from "prop-types";
import { NextPage } from "next";
import Header from '../header';
import Footer from '../footer';
import NextHead from '../header/head';


interface Props {
    title?: string;
    children?: React.ReactNode;
}


const MainLayout: NextPage<Props> = ( {
    children,
    title
} ) => {
    return (
      <>
        <NextHead pageTitle={title} />
        <div className="flex flex-col h-full" style={{ height: "100vh" }}>
          <Header />
          <main className="container mx-auto h-auto md:px-10 lg:px-20 p-2  flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </>
    );
};

MainLayout.propTypes = {
    title: PropTypes.string,
    children: PropTypes.any
};

export default MainLayout;
