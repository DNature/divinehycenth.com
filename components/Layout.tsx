import * as React from "react";
import PropTypes from "prop-types";
import { NextPage } from "next";

import Footer from "./footer";
import Header from "./header";

interface Props {
  title?: string;
  children?: React.ReactNode;
  isMain?: boolean;
}


const Layout: NextPage<Props> = ({
  children,
  title = "Hello world",
  isMain
}) => {
  return (
    <>
      <Header title={title} isMain={isMain} />
      <main className="container mx-auto h-auto">{children}
      </main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  title: PropTypes.string,
  isMain: PropTypes.bool,
  children: PropTypes.any
};

export default Layout;
