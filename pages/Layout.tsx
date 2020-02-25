import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { NextPage } from "next";
import { Layout as AntLayout } from "antd";
import Navbar from '../components/SocialIcons';


interface Props  {
  title?: string;
  children?: React.ReactNode;
  pathname?: string;
}

const { Footer, 
  Content
 } = AntLayout;


const Layout: NextPage<Props> = ({
  children,
  title = "This is the default title",
  pathname
}) => {
  const isBlogPost = pathname === "/" ? "main" : "minimal";
  console.log(pathname)
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className={isBlogPost}>
        <Navbar />
      </header>
      <Content>{children}</Content>
      <Footer>
        <hr />
        <span>I&apos;m here to stay (Footer)</span>
      </Footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
  pathname: PropTypes.string
};

Layout.getInitialProps = async ({ pathname}): Promise<Props> => {

  return {pathname}
}

export default Layout;
