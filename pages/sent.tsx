import * as React from "react";
import { NextPage } from "next";

import Layout from "../components/layouts";

const Sent: NextPage = () => {
  return (
    <>
      <Layout path="/sent" description="Your message was sent successfully" title="Divine Hycenth | Message sent">
        <div className="lg:px-64 md:px-40 sm:px-20 px-12 mx-auto text-center">
          <img src="/images/sent.svg" alt="Message sent" />
          <p className="text-xl text-link">Message sent</p>
        </div>
      </Layout>
    </>
  );
};

export default Sent;
