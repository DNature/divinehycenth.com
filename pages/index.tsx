/** ** */
import * as React from 'react';
import { Container, Box, Stack, LazyImage } from '@nature-ui/core';
import Link from 'next/link';

import { Styled } from 'components/nature-jsx-elements';
import { BlurLeft, BlurRight } from 'components/BlurEffect';
import { Button } from 'components/custom/Button';
import { getBlogPosts } from 'utils/get-blog-posts';
import { HomePostCards } from 'components/cards/home-post-cards';
import { HomeWorksCard } from 'components/cards/works-card';
import { Search } from 'components/algolia-search';
import works from 'configs/works.json';
import popular from 'configs/popular-posts.json';

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
            I’m a software engineer, UI/UX Designer, and a Football lover{' '}
            <Link href='/about'>
              <a className='text-primary-500 font-bold text-5xl'>&#8594;</a>
            </Link>
          </Styled.h2>

          <div className='mt-12 mx-auto px-6 md:hidden'>
            <Search />
          </div>
        </Container>
        <Container size='sm' className='mt-20 z-10 -mb-40 w-full'>
          <Box className='shadow-lg p-10 rounded-2xl block bg-glass w-full'>
            <Styled.h3>Popular Posts</Styled.h3>

            <Box className='grid md:grid-cols-1 gap-10 grid-cols-2 mt-6 w-full'>
              {popular &&
                popular.map((post) => (
                  <Link key={post.title} href={post.href}>
                    <Box
                      as='a'
                      css={{
                        minHeight: 150,
                      }}
                      className='text-center rounded-xl relative overflow-hidden group cursor-pointer'
                    >
                      <Box className='bg-gray-900 z-10  items-center h-full absolute top-0 left-0 px-3 hidden group-hover:flex'>
                        <h3 className='text-gray-100 font-semibold text-xl'>
                          {post.title}
                        </h3>
                      </Box>
                      <LazyImage
                        src={post.imageUrl}
                        fallbackSrc={post.fallbackSrc}
                        className='w-full h-full object-cover z-0'
                      />
                    </Box>
                  </Link>
                ))}
            </Box>
          </Box>
        </Container>
      </main>
      <Container as='section' size='sm' className='my-28 mx-auto p-6 md:p-0'>
        <div className='flex mb-12'>
          <Styled.h3>Recent Posts</Styled.h3>
          <Button to='/blog' color='gradient' className='ml-3 rounded-md'>
            See all
          </Button>
        </div>
        <div className='grid md:grid-cols-2 gap-12'>
          <HomePostCards post={posts[0]} />
          <HomePostCards post={posts[1]} />
          <HomePostCards post={posts[2]} />
          <HomePostCards post={posts[3]} />
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
