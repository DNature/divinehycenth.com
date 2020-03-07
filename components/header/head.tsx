import * as React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import { NextPage } from "next";

interface Props {
  description?: string;
  pageTitle?: string;
}

const NextHead: NextPage<Props> = ({
  pageTitle = "Divine Hycenth 👋 Full Stack Software Developer",
  description = "I'm Divine Hycenth a full stack software developer creating open source projects and writing about modern JavaScript, Typescript, Graphql, Python, Node.js, and development."
}) => (
  <Head>
    <meta charSet="utf-8" />
    <link rel="shortcut icon" href="/icons/favicon.ico" />
    <link rel="canonical" href="https://divinenature.com" />
    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
    <meta property="og:description" content={description} />
    <meta property="og:title" content={pageTitle} />

    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    {/* <meta name="theme-color" content="#15202b" /> */}
    <meta name="description" content={description} />
    <meta itemProp="name" content="Divine Hycenth" />
    <meta itemProp="description" content={description} />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="divinehycenth" />
    <meta name="twitter:site" content="@DivineHycenth" />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:app:name:iphone" content="portfolio" />
    <meta name="twitter:app:id:iphone" content="" />
    <meta name="twitter:app:name:ipad" content="portfolio" />
    <meta name="twitter:app:id:ipad" content="" />
    <meta name="twitter:app:name:googleplay" content="portfolio" />
    <meta name="twitter:app:id:googleplay" content="" />

    <meta property="og:determiner" content="software" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:site_name" content="https://divinenature.com" />
    <meta property="og:url" content="Divine Hycenth" />
    <meta property="og:type" content="website" />

    <link
      href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Satisfy&display=swap"
      rel="stylesheet"
    />
    {pageTitle ? (
      <title>{pageTitle}</title>
    ) : (
      <title>Divine Hycenth | Full Stack Software Developer Blog website</title>
    )}
  </Head>
);

NextHead.propTypes = {
  pageTitle: PropTypes.string,
  description: PropTypes.string,
};

export default NextHead