import Link from 'next/link';
import { Button as ButtonComp, clsx } from '@nature-ui/core';

export const Button = ({ className = '', to = '#', ...rest }) => {
  return (
    <Link href={to}>
      <a>
        <ButtonComp className={clsx(className, 'rounded-lg')} {...rest} />
      </a>
    </Link>
  );
};
