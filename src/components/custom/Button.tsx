import Link from 'next/link';
import { Button as ButtonComp, clsx } from '@nature-ui/core';

export const Button = ({
  className = '',
  target = undefined,
  to = '#',
  ...rest
}) => {
  return (
    <Link href={to}>
      <a target={target}>
        <ButtonComp className={clsx(className, 'rounded-lg')} {...rest} />
      </a>
    </Link>
  );
};
