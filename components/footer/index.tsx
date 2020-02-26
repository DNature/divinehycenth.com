import React from "react";
import { NextPage } from "next";

const Footer: NextPage = () => {
  return (
    <footer
      className="mt-20 bg-gray-800 py-5"
      style={{ justifySelf: "flex-start" }}
    >
      <div className="container  text-center flex flex-col items-center">
        <hr />
        <br />
        <span className="text-gray-500 hover:text-gray-100">&copy; Copyright 2020: Divine Hycenth</span>
      </div>
    </footer>
  );
};

export default Footer;
