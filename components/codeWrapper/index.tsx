import * as React from "react";
import PropTypes from "prop-types";

interface Props {
  lang?: string;
}

const CodeWrapper = ({ lang }: Props): JSX.Element => {
  return (
    <div className="bar z-10 flex justify-between pr-4">
      <div className="btn" />
      <p className="name text-gray-500 text-sm font-sans">{lang}</p>
    </div>
  );
};

CodeWrapper.propTypes = {
  lang: PropTypes.string
};

export default CodeWrapper;
