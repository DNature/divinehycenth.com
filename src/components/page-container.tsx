/** ** */
import * as React from 'react';
import { LazyImage, Box } from '@nature-ui/core';
import { useRouter } from 'next/router';

import SEO from './seo';
import { EditPageLink } from './edit-page-button';
import Footer from './footer';
import Header from './header';
import PageTransition from './page-transition';
import { Styled } from './nature-jsx-elements';
import Comments from './comments';
function useHeadingFocusOnRouteChange() {
  const router = useRouter();

  React.useEffect(() => {
    const onRouteChange = () => {
      const [heading] = Array.from(document.getElementsByTagName('h1'));
      heading?.focus();
    };
    router.events.on('routeChangeComplete', onRouteChange);
    return () => {
      router.events.off('routeChangeComplete', onRouteChange);
    };
  }, []);
}

interface PageContainerProps {
  frontMatter: {
    slug?: string;
    title: string;
    description?: string;
    editUrl?: string;
    imageUrl?: string;
    auth?: {
      avatarUrl?: string;
      githubUrl?: string;
      name?: string;
      websiteUrl?: string;
      twitterUsername?: string;
    };
    lastEdited?: string;
  };
  children: React.ReactNode;
}

function PageContainer(props: PageContainerProps) {
  const { frontMatter, children } = props;
  useHeadingFocusOnRouteChange();

  const { title, description, editUrl, imageUrl, lastEdited } = frontMatter;

  let fallbackSrc: any = imageUrl.split('.');

  if (fallbackSrc[fallbackSrc.length - 1] === 'gif') {
    fallbackSrc = fallbackSrc.join('.').replace(/\/c_scale.*?\//gis, '/w_50/');
  } else {
    fallbackSrc = imageUrl.replace(/\/c_scale.*?\//gis, '/c_scale,w_0.05/');
  }

  return (
    <>
      <SEO title={title} description={description} />
      <Header />
      <Box as='main' className='h-full'>
        <Box centered className='flex max-w-screen-lg mx-auto'>
          <Box className='flex-1 w-screen'>
            <Box
              id='content'
              className='pt-3 px-5 mt:10 md:mt-16 mx-auto max-w-3xl'
              css={{
                minHeight: '76vh',
              }}
            >
              <PageTransition>
                <Styled.h1 className='outline-none text-6xl font-bold mb-1'>
                  {title}
                </Styled.h1>
                {lastEdited && (
                  <Styled.p className='opacity-60'>
                    Last edited: {lastEdited}
                  </Styled.p>
                )}
                <div className='mt-12 grid'>
                  <LazyImage
                    src={imageUrl}
                    fallbackSrc={fallbackSrc}
                    className='w-full h-full object-cover'
                    alt={title}
                  />
                </div>
                {children}
              </PageTransition>
              <Box className='my-14'>
                {editUrl && <EditPageLink href={editUrl} />}
              </Box>
              <Comments className='relative z-10 my-36' />
            </Box>
            <Footer />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default PageContainer;
