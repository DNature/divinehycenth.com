import React from 'react';

import { Box, Image, Badge, Stack, clsx } from '@nature-ui/core';

import { Styled } from 'components/nature-jsx-elements';
import { getNChars } from 'utils/getNChars';
import { Button } from 'components/custom/Button';

export const WorksCard = ({ work, className = '', ...rest }) => {
  const { title, tags, description, githubUrl, websiteUrl, imageUrl } = work;

  return (
    <>
      <Box
        {...rest}
        className={clsx(className, 'p-6 rounded-2xl bg-glass-card')}
      >
        <Box className='grid grid-cols-2 gap-4'>
          <Box className='h-full'>
            <Image src={imageUrl} alt={title} className='rounded-2xl' />
          </Box>
          <Box>
            <Styled.h3 className='font-semibold mb-2'>{title}</Styled.h3>
            {tags && (
              <Stack row spacing='2'>
                {tags.map((tag, i) => (
                  <Badge color='primary-600' variant='solid' key={tag + i}>
                    {tag}
                  </Badge>
                ))}
              </Stack>
            )}
            <Styled.p className='my-4'>{getNChars(description, 300)}</Styled.p>
            <Stack row>
              <Button size='sm' color='gradient' to={websiteUrl}>
                Visit site
              </Button>
              <Button size='sm' color='gray-300' to={githubUrl}>
                View source
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>
    </>
  );
};
