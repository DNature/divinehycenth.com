import Link from 'next/link';
import { Box, clsx } from '@nature-ui/core';

export const HomePostCards = ({ className = '', post, ...rest }) => {
  return (
    <Link href={post.slug}>
      <Box
        as='a'
        css={{
          '&:hover': {
            backdropFilter: 'blur(10px)',
          },
          background:
            'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #1F2D2D 93.23%), url(https://bit.ly/2Z4KKcF) no-repeat bottom/cover;',
        }}
        className={clsx(
          className,
          'pt-24 pb-10 text-center rounded-xl px-5 cursor-pointer',
        )}
        {...rest}
      >
        <h3 className='text-white font-semibold text-xl'>{post.title}</h3>
      </Box>
    </Link>
  );
};
