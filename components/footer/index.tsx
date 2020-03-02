import React from "react";
import { NextPage } from "next";

const Footer: NextPage = () => {
  return (
    <footer
      className="mt-20"
      style={{ justifySelf: "flex-start" }}
    >
      <div className="container text-center mx-auto flex flex-col items-center">
        <hr />
        <br />
        <span className="text-white pb-10">
          &copy; Copyright 2020: Divine Hycenth
        </span>
      </div>
    </footer>
  );
};

export default Footer;
