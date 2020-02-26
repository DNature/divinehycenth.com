import * as React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";

import Minimal from "./minimal";
import Main from "./main";

const Header: NextPage = () => {
  const { pathname } = useRouter();
  return <>{pathname !== "/" ? <Minimal /> : <Main />}</>;
};

export default Header;
