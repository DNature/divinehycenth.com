import * as React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

interface Props {
  href: string;
  target?: string;
  children?: React.ReactNode;
  className?: string;
}

const CustomLink: React.FC<Props> = ({ href, children, target, className,...props }) => {
  return (
    <Link href={href}>
      <a {...props} target={target} className={className}>
        {children}
      </a>
    </Link>
  );
};

CustomLink.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
  className: PropTypes.string,
};
export default CustomLink;
