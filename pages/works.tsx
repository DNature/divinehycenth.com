import { Box, Container, Stack } from '@nature-ui/core';

import { Zigzag } from 'components/zigzag';
import { WorksCard, MobileCard } from 'components/cards/works-card';
import MainLayout from 'layouts/main';
import works from 'configs/works.json';

const Works = () => {
  return (
    <MainLayout>
      <Box className='relative z-10'>
        <Box
          css={{
            minHeight: '20vh',
          }}
          className='grid place-content-center'
        >
          <Zigzag>Recent projects</Zigzag>
        </Box>

        <Container size='xs' className='px-6 md:hidden mb-20'>
          <Stack col spacing='12'>
            {works.map((work) => (
              <MobileCard key={work.title} {...work} />
            ))}
          </Stack>
        </Container>

        <Container
          size='md'
          centered
          className='my-12 px-6 lg:px-0 hidden md:flex'
        >
          <Stack col spacing='20'>
            {works.map((work) => (
              <WorksCard key={work.title} {...work} />
            ))}
          </Stack>
        </Container>
      </Box>
    </MainLayout>
  );
};

export default Works;
