import { Box, Container, Icon, Stack } from '@nature-ui/core';
import siteConfig from 'configs/site-config';
import Link from 'next/link';
import React from 'react';
import {
  IoGlobeOutline,
  IoLogoDiscord,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoTwitter,
} from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { BlurLeft, BlurRight } from './BlurEffect';
import { NigeriaFlag } from './nigeriaFlag';

export const links = [
  {
    icon: IoLogoGithub,
    label: 'Github',
    href: '//github.com/dnature',
  },
  {
    icon: IoLogoTwitter,
    label: 'Twitter',
    href: '//twitter.com/DivineHycenth',
  },
  {
    icon: IoGlobeOutline,
    label: 'Website',
    href: '//divinehycenth.com',
  },
  {
    icon: IoLogoLinkedin,
    label: 'Linkedin',
    href: '//linkedin.com/in/dnature',
  },
  {
    icon: MdEmail,
    label: 'Email',
    href: 'mailto:contact@divinehycenth.com',
  },
  {
    icon: IoLogoDiscord,
    label: 'Discord',
    href: siteConfig.discord.url,
  },
];

type FooterLinkProps = {
  icon?: React.ElementType;
  href?: string;
  label?: string;
};
const FooterLink: React.FC<FooterLinkProps> = ({
  icon,
  href,
  label,
  ...rest
}) => (
  <Box as='span' {...rest}>
    <Link href={href} aria-label={label}>
      <a target='_blank'>
        <Icon as={icon} size='lg' className='text-gray-400' />
      </a>
    </Link>
  </Box>
);

const Footer = () => {
  return (
    <Box as='footer' className='relative' css={{ justifySelf: 'flex-start' }}>
      <BlurLeft className='absolute -top-44 left-0 lg:left-64 xl:left-80 2xl:left-96' />
      <BlurRight className='absolute -top-44 right-0 lg:right-64 xl:right-80 2xl:right-96' />
      <Box className='text-center py-16 relative bg-glass'>
        <Container size='xs' centered>
          <p className='text-sm'>
            <span>
              Proudly made in
              <NigeriaFlag />
            </span>
            <span>by Divine Hycenth</span>
          </p>
          <Stack row className='justify-center mt-3'>
            {links.map((link) => (
              <FooterLink key={link.href} {...link} />
            ))}
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
