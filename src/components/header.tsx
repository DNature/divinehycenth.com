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
  IconButton,
} from '@nature-ui/core';

import siteConfig from 'configs/site-config';

import { SearchButton } from './algolia-search';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Logo } from './Logo';
import { MobileNaveContent, MobileNavButton } from './mobile-nav';
import { DiscordIcon, GithubIcon } from './CustomIcons';
import { useRouter } from 'next/router';
import { useColorMode, useColorModeValue } from './color-mode/color-mode';

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

  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  useUpdateEffect(() => {
    mobileNavBtnRef.current?.focus();
  }, [mobileNav.isOpen]);
  return (
    <nature.header
      css={{
        backdropFilter: 'blur(10px)',
      }}
      className='sticky top-0 left-0 w-full z-50 bg-glass'
    >
      <div className='w-full bg-gradient-line h-2 absolute top-0 left-0' />

      <nav className='w-full max-w-screen-lg px-4 md:px-0 md:mx-auto py-3'>
        <div className='flex items-center justify-between'>
          <Stack row spacing='6'>
            <Logo />
            <NavLink href='/blog'>Blog</NavLink>
            <NavLink href='#'>About</NavLink>
            <NavLink href='#'>Works</NavLink>
            <NavLink href='#'>Contact</NavLink>
          </Stack>
          <div className='hidden md:w-2/5 md:flex items-center justify-end'>
            <SearchButton />
            <IconButton
              size='md'
              className='text-lg sm:ml-3'
              text='current'
              aria-label={`Switch to ${text} mode`}
              variant='ghost'
              onClick={toggleMode}
              icon={<SwitchIcon />}
            />
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
