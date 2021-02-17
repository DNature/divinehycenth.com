/** ** */
import * as React from 'react';

import Header from 'components/header';
import SEO from 'components/seo';
import Footer from 'components/footer';

const Main = ({
  title = 'Divine Hycenth (Blog) - Software Engineer / UIX Designer.',
  description = 'Hi 👋,  I’m a full stack software engineer, technical writer, and a UI/UX Designer.',
  children,
}) => {
  return (
    <>
      <SEO title={title} description={description} />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Main;
