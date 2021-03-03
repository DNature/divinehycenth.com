import { Box, Container } from '@nature-ui/core';

import { Styled } from 'components/nature-jsx-elements';
import siteConfig from 'configs/site-config';

import MainLayout from 'layouts/main';

const Link = ({ href, children }) => (
  <Styled.p>
    <a href={href} target='_blank' className='text-primary-500 hover:underline'>
      {children}
    </a>
  </Styled.p>
);

export const links = [
  {
    label: 'Github',
    href: '//github.com/dnature',
  },
  {
    label: 'Twitter',
    href: '//twitter.com/DivineHycenth',
  },
  {
    label: 'Linkedin',
    href: '//linkedin.com/in/dnature',
  },
  {
    label: 'Discord',
    href: siteConfig.discord.url,
  },
];

const Contact = ({}) => {
  return (
    <MainLayout>
      <Container
        size='sm'
        centered
        className='relative z-20 my-12 px-6 lg:px-0'
      >
        <Styled.h1>Contact me on</Styled.h1>
        <Styled.h3>
          <a
            href='mailto:contact@divinehycenth.com'
            className='text-primary-500 hover:underline'
          >
            contact@divinehycenth.com
          </a>
        </Styled.h3>

        <Styled.h3 className='mt-12'>You can also find me on</Styled.h3>
        <ol>
          {links.map(({ href, label }) => (
            <li key={label}>
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ol>
      </Container>
    </MainLayout>
  );
};

export default Contact;
