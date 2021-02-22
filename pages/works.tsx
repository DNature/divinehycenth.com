import {
  Box,
  Container,
  Slide,
  SlideFade,
  Image,
  Stack,
} from '@nature-ui/core';

import { Zigzag } from 'components/zigzag';
import { WorksCard } from 'components/cards/works-card';
import Header from 'components/header';
import SEO from 'components/seo';
import Footer from 'components/footer';

const Works = () => {
  return (
    <>
      {/* <SEO title={title} description={description} /> */}
      <Header />
      <Box className='relative z-10'>
        <Box
          css={{
            minHeight: '20vh',
          }}
          className='grid place-content-center'
        >
          <Zigzag>Recent projects.</Zigzag>
        </Box>

        <Container size='md' centered className='my-12 px-6 lg:px-0'>
          <Stack col spacing='20'>
            <WorksCard
              title='Nature UI'
              imageUrl='/images/works/nature-ui.png'
              description='Nature UI is a Modular, Composable and Extensible React based component library built with tailwindcss and emotion.'
              githubUrl='https://github.com/nature-ui/nature-ui'
              websiteUrl='https://nature-ui.com'
            />
            <WorksCard
              title='Hardocs.'
              imageUrl='/images/works/hardocs.png'
              description='Hardocs is a Cross Platform Desktop App funded by European Open Science Cloud focused on the creation, storing, presentation, and search of metadata related to project documents and it is designed with hardware documentation in mind.'
              githubUrl='https://github.com/hardocs/desktop-app'
              websiteUrl='https://hardocs.github.io'
            />
            <WorksCard
              title='CombatCovid'
              imageUrl='/images/works/combat-covid.png'
              description='Combat covid with hardware Search for well documented designs 🔍 and document new solutions.'
              githubUrl='http://github.com/CombatCovid'
              websiteUrl='http://combatcovid.equipment/'
            />
            <WorksCard
              title='CRWN Clothing'
              imageUrl='/images/works/crwn-clothing.png'
              description='CRWN clothing is an imaginary e-commerce clothing store. Some features includes payment with stripe, redux for global state management, firebase and lots more.'
              githubUrl='http://github.com/DNature/crwn-clothing-e-commerce'
              websiteUrl='http://crwn-clothing-navy-ten.now.sh/'
            />
            <WorksCard
              title='Transferwise Clone'
              imageUrl='/images/works/transferwise.png'
              description='I cloned the homepage of transferwise.com just for fun. I attempted the design and most functionalities present on the website.'
              githubUrl='http://github.com/DNature/transferwise'
              websiteUrl='https://transferwise.netlify.app/'
            />
          </Stack>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default Works;
