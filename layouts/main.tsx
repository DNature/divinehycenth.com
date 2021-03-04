/** ** */
import * as React from 'react';

import Header from 'components/header';
import { DefaultSeo } from 'next-seo';
import SEO from 'components/seo';
import Footer from 'components/footer';
import siteConfig from 'configs/site-config';

const Main = ({
  title = 'Software Engineer / UIX Designer',
  description = 'Hi 👋,  I’m a full stack software engineer, technical writer, and a UI/UX Designer.',
  children,
}) => {
  return (
    <>
      <DefaultSeo {...siteConfig.seo} />
      <SEO title={title} description={description} />
      <Header />
      <div className='min-h-screen overflow-x-hidden'>{children}</div>
      {/* {children} */}
      <Footer />
    </>
  );
};

export default Main;
