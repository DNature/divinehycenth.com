/* eslint-disable react/display-name */
import * as React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

interface Props {
  href: string;
  target?: string;
  children: React.ReactNode;
  className?: string;
  as?: string;
}

interface ComponentProps {
  className?: string;
  onClick?: () => void;
  href?: string;
  children: React.ReactNode;
  target?: string;
}

export const AnchorTag = React.forwardRef<HTMLButtonElement, ComponentProps>(
  (props, ref) => {
    
    // eslint-disable-next-line react/prop-types
    const { className, children, href} = props;

    return (
      //@ts-ignore
      <a className={className} href={href} ref={ref}>
        {children}
      </a>
    );
  }
);

const CustomLink: React.FC<Props> = ({ href, children, target, className,as }) => {
  return (
    <Link as={as}  href={href} scroll={true}>
      <a target={target} className={className}>
        {children}
      </a>
    </Link>
  );
};

CustomLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
  className: PropTypes.string,
  as: PropTypes.string,
};


export default CustomLink;
