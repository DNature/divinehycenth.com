import React from 'react';
import Link from 'next/link';
import {
  Icon,
  useUpdateEffect,
  useDisclosure,
  Stack,
  Button,
  clsx,
  nature,
} from '@nature-ui/core';

import siteConfig from 'configs/site-config';

import { SearchButton } from './algolia-search';
import VersionSwitcher from './VersionSwitcher';
import { Logo } from './Logo';
import { MobileNaveContent, MobileNavButton } from './mobile-nav';
import { DiscordIcon, GithubIcon } from './CustomIcons';
import { useRouter } from 'next/router';

const NavLink = ({ children, href, ...props }) => {
  const { pathname } = useRouter();
  return (
    <Button variant='none' {...props}>
      <Link href={href}>
        <a
          className={clsx('font-medium', {
            [`text-gradient`]: pathname.includes(href),
          })}
        >
          {children}
        </a>
      </Link>
    </Button>
  );
};

const HeaderContent = () => {
  const mobileNavBtnRef = React.useRef<HTMLButtonElement>();

  const mobileNav = useDisclosure();

  useUpdateEffect(() => {
    mobileNavBtnRef.current?.focus();
  }, [mobileNav.isOpen]);
  return (
    <nature.header
      css={{
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
      }}
      className='sticky top-0 left-0 w-full z-50'
    >
      <div className='w-full bg-gradient-line h-2 absolute top-0 left-0' />

      <nav className='w-full max-w-screen-lg px-4 md:px-0 md:mx-auto py-3'>
        <div className='flex items-center justify-between'>
          <Stack direction='row' spacing='36px'>
            <Logo />
            <NavLink href='/blog'>Blog</NavLink>
            <NavLink href='#'>About</NavLink>
            <NavLink href='#'>Works</NavLink>
            <NavLink href='#'>Contact</NavLink>
          </Stack>
          <div className='hidden md:w-4/6 md:flex items-center justify-end'>
            <SearchButton />
            <VersionSwitcher />
            <Link
              aria-label='Go to Nature UI GitHub page'
              href={siteConfig.repo.url}
            >
              <a target='_blank'>
                <Icon
                  className='mr-5 text-gray-50 hover:text-gray-75 transition-colors duration-150'
                  size='lg'
                  as={GithubIcon}
                />
              </a>
            </Link>
            <Link
              aria-label='Go to Nature UI Discord page'
              href={siteConfig.discord.url}
            >
              <a target='_blank'>
                <Icon
                  className='text-gray-50 hover:text-gray-75 transition-colors duration-150'
                  size='lg'
                  as={DiscordIcon}
                />
              </a>
            </Link>
          </div>

          <MobileNavButton
            ref={mobileNavBtnRef}
            aria-label='Open Menu'
            onClick={mobileNav.onOpen}
          />
        </div>
      </nav>

      <MobileNaveContent
        isOpen={mobileNav.isOpen}
        onClose={mobileNav.onClose}
      />
    </nature.header>
  );
};

const Header = () => {
  return <HeaderContent />;
};

export default Header;
