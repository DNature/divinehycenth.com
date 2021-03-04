import Link from 'next/link';
import { Box, LazyImage, Container } from '@nature-ui/core';

import { Styled } from 'components/nature-jsx-elements';

import MainLayout from 'layouts/main';

const About = ({}) => {
  let imageUrl =
    'https://res.cloudinary.com/dnature/image/upload/c_scale/v1613595453/avatar_ngv62q.jpg';

  let fallbackSrc: any = imageUrl.split('.');

  if (fallbackSrc[fallbackSrc.length - 1] === 'gif') {
    fallbackSrc = fallbackSrc.join('.').replace(/\/c_scale.*?\//gis, '/w_50/');
  } else {
    fallbackSrc = imageUrl.replace(/\/c_scale.*?\//gis, '/c_scale,w_0.01/');
  }

  return (
    <MainLayout title='About me'>
      <Container size='lg' centered className='relative z-20 my-12'>
        <Box className='grid mx-4 md:mx-0'>
          <LazyImage
            src={imageUrl}
            loading='lazy'
            fallbackSrc={fallbackSrc}
            alt={'Divine Hycenth'}
            className='w-2/5 h-full object-cover mx-auto md:mx-0 z-0 px-4 md:py-0'
          />
        </Box>
        <Box className='mt-12 md:-mt-40 md:ml-80 xl:ml-92 mx-4 md:mx-0 bg-white p-4 md:p-16 relative z-10'>
          <Styled.h1 className='font-bold'>
            Hello there 👋, I’m Divine Hycenth.
          </Styled.h1>
          <Styled.p className='mt-5 text-xl'>
            I’m a Software Engineer with 4years of experience, UI/UX Designer,
            and Technical Writer.
          </Styled.p>
          <Styled.p className='mt-5 text-xl'>
            I spend most of my free time improving{' '}
            <a
              href='https://nature-ui.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              Nature UI
            </a>
            . Of course, I also hit the Jym, play football, and do some other
            fun activities when I don't feel like coding.
          </Styled.p>

          <Styled.p className='mt-5 text-xl'>
            Occasionally, I write articles related to software here on my blog
            and also on{' '}
            <a
              href='https://dev.to/dnature'
              target='_blank'
              rel='noopener noreferrer'
            >
              DEV
            </a>{' '}
            and Hashnode{' '}
            <a
              href='https://hashnode.com/@DNature'
              target='_blank'
              rel='noopener noreferrer'
            ></a>
            . I enjoy building software solutions for both organizations and
            open-source.
          </Styled.p>
          <Styled.p className='mt-5 text-xl mb-12'>
            I wanted an adds free platform that I can share my approach to
            solving some technical problems, the tools I use to stay productive,
            and a place to reflect on the things I've done in the past so I
            created this website.
          </Styled.p>

          <Link href='/blog/my-story'>
            <a className='text-primary-500 text-3xl font-semibold hover:underline'>
              Read more about me and the technologies I use &#8594;
            </a>
          </Link>
        </Box>
      </Container>
    </MainLayout>
  );
};

export default About;
