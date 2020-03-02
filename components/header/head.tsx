import * as React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import { NextPage } from "next";

interface Props {
  pageTitle?: string;
}

const NextHead: NextPage<Props> = ({
  pageTitle = "Divine Hycenth 👋 Full Stack Software Developer"
}) => (
  <Head>
    <meta charSet="utf-8" />
    <link rel="shortcut icon" href="/icons/favicon.ico" />
    <link rel="canonical" href="https://divinenature.com" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <meta name="theme-color" content="#15202b" />
    <meta
      name="description"
      content="Divine Hycenth | Full Stack Software Developer"
    />
    <meta itemProp="name" content="Divine Hycenth" />
    <meta
      itemProp="description"
      content="Divine Hycenth | Full Stack Software Developer"
    />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="divinehycenth" />
    <meta name="twitter:site" content="@DivineHycenth" />
    <meta
      name="twitter:description"
      content="Personal website by Divine Hycenth | Full Stack Software Developer"
    />
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

    {pageTitle ? (
      <title>{pageTitle}</title>
    ) : (
      <title>Divine Hycenth | Full Stack Software Developer</title>
    )}

    <link href="https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap" rel="stylesheet"/>
  </Head>
);

NextHead.propTypes = {
  pageTitle: PropTypes.string
};

export default NextHead