/** ** */
import * as React from 'react';
import { Container, Box, Stack } from '@nature-ui/core';
import Link from 'next/link';

import { Styled } from 'components/nature-jsx-elements';
import { BlurLeft, BlurRight } from 'components/BlurEffect';
import { Button } from 'components/custom/Button';
import { getBlogPosts } from 'utils/get-blog-posts';
import { HomePostCards } from 'components/cards/home-post-cards';
import { HomeWorksCard } from 'components/cards/works-card';
import { Search } from 'components/algolia-search';
import works from 'configs/works.json';

import MainLayout from 'layouts/main';

const Index = ({ posts }) => {
  return (
    <MainLayout>
      <main className='grid place-items-center md:pb-32 pb-12 px-4 md:px-0 relative mb-60'>
        <BlurLeft className='absolute bottom-0 -mb-32 left-0 lg:left-64 xl:left-80 2xl:left-96' />
        <BlurRight className='absolute bottom-0 -mb-32 right-0 lg:right-64 xl:right-80 2xl:right-96' />
        <Container size='sm' className='z-10 text-center mt-32 md:mt-48 mb-16'>
          <Styled.h1 className='mb-3'>
            Hi 👋, I’m{' '}
            <span className='text-gradient shadow-text'>Divine Hycenth.</span>
          </Styled.h1>
          <Styled.h2>
            I’m a software engineer, UI/UX Designer and I love playing football{' '}
            <Link href='/about'>
              <a className='text-primary-500 font-bold text-5xl'>&#8594;</a>
            </Link>
          </Styled.h2>

          <div className='mt-12 mx-auto px-6 md:hidden'>
            <Search />
          </div>
        </Container>
        <Container size='sm' className='mt-20 z-10 -mb-40'>
          <Box className='shadow-lg p-10 rounded-2xl block bg-glass'>
            <Styled.h3>Popular Posts</Styled.h3>

            <Stack row spacing='10' className='justify-between mt-4' responsive>
              <Box
                css={{
                  background:
                    'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #1F2D2D 93.23%), url(https://bit.ly/2Z4KKcF) no-repeat bottom/cover;',
                }}
                className='pt-24 pb-10 text-center rounded-xl px-5'
              >
                <h3 className='text-gray-100 font-semibold text-xl'>
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
                <h3 className='text-gray-100 font-semibold text-xl'>
                  Handling file uploads with Apollo-server 2.0
                </h3>
              </Box>
            </Stack>
          </Box>
        </Container>
        {/* <Box
          className='absolute bottom-2 shadow-lg rounded-full'
          css={{
            width: '3478px',
            height: '3501.28px',
          }}
        /> */}
      </main>
      <Container as='section' size='sm' className='my-28 mx-auto p-6 md:p-0'>
        <div className='flex mb-12'>
          <Styled.h3>Recent Posts</Styled.h3>
          <Button to='/blog' color='gradient' className='ml-3 rounded-md'>
            See all
          </Button>
        </div>
        <div className='grid md:grid-cols-2 gap-12'>
          <Stack spacing='12' col>
            <HomePostCards post={posts[0]} />
            <HomePostCards post={posts[1]} />
          </Stack>
          <Stack spacing='12' col>
            <HomePostCards post={posts[2]} />
            <HomePostCards post={posts[3]} />
          </Stack>
        </div>
      </Container>
      <Container
        as='aside'
        size='sm'
        className='my-28 mx-auto p-6 md:p-0 z-10 relative'
      >
        <div className='flex mb-12'>
          <Styled.h3>Recent Projects</Styled.h3>
          <Button to='/works' color='gradient' className='ml-3 rounded-md'>
            See all
          </Button>
        </div>
        <Stack spacing='12' col>
          <HomeWorksCard work={works[0]} />
          <HomeWorksCard work={works[1]} />
        </Stack>
      </Container>
    </MainLayout>
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
