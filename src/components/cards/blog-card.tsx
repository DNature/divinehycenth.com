import React from 'react';

import Link from 'next/link';
import { Box, Image, Badge, Stack, clsx } from '@nature-ui/core';

import { Styled } from 'components/nature-jsx-elements';
import { getNChars } from 'utils/getNChars';

export const BlogCard = ({ className = '', post, ...rest }) => {
  const { slug, tags, title, description, imageUrl } = post;

  return (
    <>
      <Box
        {...rest}
        as='article'
        className={clsx(
          className,
          'p-6 rounded-2xl bg-glass-card cursor-pointer hover:opacity-80 group',
        )}
      >
        <Link href={slug}>
          <Box className='md:grid grid-cols-2 gap-4'>
            <Box className='h-full'>
              <Image
                loading='lazy'
                src={imageUrl}
                alt={title}
                className='rounded-2xl'
              />
            </Box>
            <Box>
              <Styled.h3 className='font-semibold mt-2 md:mt-0 group-hover:underline '>
                {title}
              </Styled.h3>
              {tags && (
                <Stack row spacing='2' className='mt-4'>
                  {tags.map((tag, i) => (
                    <Badge color='primary-500' variant='solid' key={tag + i}>
                      {tag}
                    </Badge>
                  ))}
                </Stack>
              )}
              <Styled.p className='mt-4'>
                {getNChars(description, 400)}
              </Styled.p>
            </Box>
          </Box>
        </Link>
      </Box>
    </>
  );
};
