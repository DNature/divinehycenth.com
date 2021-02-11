import { Button as ButtonComp, clsx } from '@nature-ui/core';

export const Button = ({ className, ...rest }) => {
  return (
    <ButtonComp
      color='gradient'
      className={clsx(className, 'rounded-lg')}
      {...rest}
    />
  );
};
