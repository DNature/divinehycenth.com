import React from 'react';

import Link from 'next/link';
import { Box, LazyImage, Avatar, Badge, Stack } from '@nature-ui/core';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { Styled } from 'components/nature-jsx-elements';
import { getNChars } from 'utils/getNChars';

const BottomVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0 },
};

export const HomePostCards = ({ post, ...rest }) => {
  const {
    slug,
    tags,
    title,
    description,
    imageUrl,
    date,
    author: { githubUrl, websiteUrl, avatarUrl, name },
  } = post;
  const readableDate = format(parseISO(date), 'MMMM dd, yyyy');

  let fallbackSrc: any = imageUrl.split('.');

  if (fallbackSrc[fallbackSrc.length - 1] === 'gif') {
    fallbackSrc = fallbackSrc.join('.').replace(/\/c_scale.*?\//gis, '/w_50/');
  } else {
    fallbackSrc = imageUrl.replace(/\/c_scale.*?\//gis, '/c_scale,w_0.05/');
  }

  const authorProfile =
    name === 'Divine Hycenth' ? '/about' : websiteUrl || githubUrl || '#';

  const [ref, inView] = useInView();
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else controls.start('hidden');
  }, [controls, inView]);

  return (
    <motion.article
      // ref={ref}
      // animate={controls}
      // initial='hidden'
      // variants={BottomVariants}
      {...rest}
    >
      <Link href={slug}>
        <a>
          <div className='grid'>
            <LazyImage
              fallbackSrc={fallbackSrc}
              src={imageUrl}
              alt={title}
              className='rounded-2xl cursor-pointer w-full h-full object-cover'
            />
          </div>
          {tags && (
            <Stack row spacing='2' className='mt-4'>
              {tags.map((tag, i) => (
                <Badge key={tag + i}>{tag}</Badge>
              ))}
            </Stack>
          )}
          <Styled.h3 className='hover:underline font-semibold cursor-pointer mt-3'>
            {title}
          </Styled.h3>
          <Styled.p className='my-4'>{getNChars(description)}</Styled.p>
        </a>
      </Link>
      <Link href={authorProfile}>
        <a>
          <Stack as='a' row spacing='2' className='items-center'>
            <Avatar src={avatarUrl} alt={name} />
            <Box>
              <p className='font-medium'>{name}</p>
              <p className='opacity-60 text-sm'>{readableDate}</p>
            </Box>
          </Stack>
        </a>
      </Link>
    </motion.article>
  );
};
