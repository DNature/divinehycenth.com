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
    <MainLayout>
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
            I’m a Full-stack Software Engineer with 4years of experience
            building applications, UI/UX Designer.
          </Styled.p>
          <Styled.p className='mt-5 text-xl'>
            I spend most of my free time improving{' '}
            <a href='https://nature-ui.com'>Nature UI</a>. Of course, I also hit
            the Jym, play football, and do some other fun activities when I
            don't feel like coding.
          </Styled.p>

          <Styled.h3 className='mt-8'>Things I do.</Styled.h3>
          <Styled.p className='mt-5 text-xl'>
            Occasionally, I write articles related to software here on my blog
            and also on <a href='https://dev.to/dnature'>DEV</a>. I enjoy
            building software solutions for both organizations and open source.
          </Styled.p>
          <Styled.p className='mt-5 text-xl'>
            I wanted an adds free platform that I can share how I was able to
            solve some technical problems and also share about the tools I use
            to solve problems and stay productive so I created{' '}
            <a href='/blog'>this blog</a>.
          </Styled.p>
          <Styled.p className='mt-5 text-xl'>
            I pay a lot of attention to software trends, design trends, best
            practices, and the latest technologies -- This is how I keep myself
            up to date.
          </Styled.p>
          <Styled.p className='mt-5 text-xl'>
            This website is built with Nature UI, Next.js, and React and it's
            powered by markdown. I also use Nodejs with Graphql for building
            APIs, Figma for UI designs, and Docker + Nginx for DevOps. I use
            technologies like Electron, Vue, Redux, etc, based on the software
            requirements.
            <br />
            Of Course, I love automation (CI/CD) so I use Github actions or
            TravisCI to automate things.
          </Styled.p>
        </Box>
      </Container>
    </MainLayout>
  );
};

export default About;
