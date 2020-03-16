import * as React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import PropTypes from 'prop-types'

import Minimal from "./minimal";
import Main from "./main";

const Header: NextPage<{ image?: string; caption?: string }> = ({
  image,
  caption
}) => {
  const { pathname } = useRouter();
  return <>{pathname !== "/" ? <Minimal image={image} caption={caption}/> : <Main />}</>;
};

Header.propTypes = {
  image: PropTypes.string,
  caption: PropTypes.string,
}
export default Header;
