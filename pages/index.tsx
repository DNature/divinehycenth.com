/** ** */
import * as React from 'react';
import { Container, Box, Stack } from '@nature-ui/core';
import { MdAccessibility, MdGrain, MdPalette } from 'react-icons/md';
import { AiFillThunderbolt } from 'react-icons/ai';
import { IoLogoGithub } from 'react-icons/io';
import Link from 'next/link';

import Header from 'components/header';
import SEO from 'components/seo';
import Footer from 'components/footer';
import { Styled } from 'components/nature-jsx-elements';
import { BlurLeft, BlurRight } from 'components/BlurEffect';
import { Button } from 'components/custom/Button';
import { getBlogPosts } from 'utils/get-blog-posts';

const Index = ({ posts }) => {
  console.log({ posts });
  return (
    <>
      <SEO
        title='Nature UI - A simple, modular, extensible and accessible component library based on tailwindcss that gives you the building blocks you need to build your React applications.'
        description='Simple, Modular and Accessible UI Components based on Tailwindcss for your React Applications.'
      />
      <Header />
      <main className='grid place-items-center w-full bg-white md:pb-32 pb-12 px-4 md:px-0 relative mb-60'>
        <BlurLeft className='absolute bottom-0 -mb-32 left-0 lg:left-64 xl:left-80 2xl:left-96' />
        <BlurRight className='absolute bottom-0 -mb-32 right-0 lg:right-64 xl:right-80 2xl:right-96' />
        <Container size='sm' className='z-10 text-center mt-32 md:mt-48 mb-16'>
          <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold text-gray-1000 leading-normal mb-3'>
            Hi 👋, I’m{' '}
            <span className='text-gradient shadow-text'>Divine Hycenth.</span>
          </h1>
          <h2 className='text-3xl md:text-4xl font-semibold leading-relaxed'>
            I’m a full stack software developer, technical writer, and UI/UX
            Designer.
          </h2>
        </Container>
        <Container size='sm' className='mt-20 z-10 -mb-40 w-full'>
          <Box
            css={{
              background: 'rgba(255,255,255,0.3)',
            }}
            className='shadow-lg p-10 rounded-2xl block border-2 border-white'
          >
            <Styled.h3>Popular Posts</Styled.h3>

            <Stack direction='row' className='justify-between mt-4'>
              <Box
                css={{
                  background:
                    'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #1F2D2D 93.23%), url(https://bit.ly/2Z4KKcF) no-repeat bottom/cover;',
                }}
                className='pt-24 pb-10 text-center rounded-xl max-w-xs px-5'
              >
                <h3 className='text-white font-semibold text-xl'>
                  Handling file uploads with Apollo-server 2.0
                </h3>
              </Box>
              <Box
                css={{
                  background:
                    'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #1F2D2D 93.23%), url(https://bit.ly/2Z4KKcF);',
                }}
                className='pt-24 pb-10 text-center rounded-xl max-w-xs px-5'
              >
                <h3 className='text-white font-semibold text-xl'>
                  Handling file uploads with Apollo-server 2.0
                </h3>
              </Box>
            </Stack>
          </Box>
        </Container>
        <Box
          className='absolute bottom-2 shadow-lg rounded-full'
          css={{
            width: '3478px',
            height: '3501.28px',
          }}
        />
      </main>
      <Container as='section' size='sm' className='my-28 mx-auto'>
        <div className='flex mb-12'>
          <Styled.h3>Recent Posts</Styled.h3>
          <Button color='gradient' className='ml-3 rounded-md'>
            See all
          </Button>
        </div>
        <Stack direction='row' spacing='3rem' className='justify-between'>
          <Stack spacing='3rem'>
            <Box
              css={{
                background:
                  'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #1F2D2D 93.23%), url(https://bit.ly/2Z4KKcF) no-repeat bottom/cover;',
              }}
              className='pt-24 pb-10 text-center rounded-xl px-5'
            >
              <h3 className='text-white font-semibold text-xl'>
                Handling file uploads with Apollo-server 2.0
              </h3>
            </Box>
            <Box
              css={{
                background:
                  'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #1F2D2D 93.23%), url(https://bit.ly/2Z4KKcF);',
              }}
              className='pt-24 pb-10 text-center rounded-xl px-5'
            >
              <h3 className='text-white font-semibold text-xl'>
                Handling file uploads with Apollo-server 2.0
              </h3>
            </Box>
          </Stack>
          <Stack spacing='3rem'>
            <Box
              css={{
                background:
                  'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #1F2D2D 93.23%), url(https://bit.ly/2Z4KKcF) no-repeat bottom/cover;',
              }}
              className='pt-24 pb-10 text-center rounded-xl px-5'
            >
              <h3 className='text-white font-semibold text-xl'>
                Handling file uploads with Apollo-server 2.0
              </h3>
            </Box>
            <Box
              css={{
                background:
                  'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #1F2D2D 93.23%), url(https://bit.ly/2Z4KKcF);',
              }}
              className='pt-24 pb-10 text-center rounded-xl px-5'
            >
              <h3 className='text-white font-semibold text-xl'>
                Handling file uploads with Apollo-server 2.0
              </h3>
            </Box>
          </Stack>
        </Stack>
      </Container>
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const posts = await getBlogPosts();
  return {
    props: {
      posts,
    },
  };
}

export default Index;
