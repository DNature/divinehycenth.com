import { Children } from 'react';
import { Styled } from './nature-jsx-elements';

export const Zigzag = ({ className = '', children, ...props }) => {
  return (
    <Styled.h1 className='text-6xl font-bold zigzag relative'>
      <img
        src='/zigzag.png'
        alt={children}
        className='absolute -top-5 -left-8'
      />
      <span className={'z-10 relative ' + className} {...props}>
        {children}
      </span>
    </Styled.h1>
  );
};
