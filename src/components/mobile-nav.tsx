import React from 'react';
import {
  Box,
  BoxProps,
  Button,
  CloseButton,
  clsx,
  IconButton,
  IconButtonProps,
  Stack,
  useUpdateEffect,
  nature,
} from '@nature-ui/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { RemoveScroll } from 'react-remove-scroll';
import { AnimatePresence, motion, useElementScroll } from 'framer-motion';

import { useRouteChanged } from 'hooks/use-route-change';
import { getRoutes } from 'layouts/mdx';

import { AiOutlineMenu } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Logo } from './Logo';
import { SidebarContent } from './sidebar/sidebar';
import { useColorMode, useColorModeValue } from './color-mode';

const NavLink = ({ href, children, className = '', ...rest }) => {
  const { pathname } = useRouter();

  const [, group] = href.split('/');
  const isActive = pathname.includes(group);

  console.log({ isActive, group });

  return (
    <Link href={href}>
      <nature.h2
        className={clsx(className, {
          'font-semibold text-gradient': isActive,
          'text-dark-600': !isActive,
        })}
        css={{
          flex: '1 1 0%',
        }}
        {...rest}
      >
        {children}
      </nature.h2>
    </Link>
  );
};

const ScrollView = (props: BoxProps & { onScroll?: any }) => {
  const { onScroll, ...rest } = props;
  const [y, setY] = React.useState(0);
  const elRef = React.useRef<any>();
  const { scrollY } = useElementScroll(elRef);
  React.useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()));
  }, [scrollY]);

  useUpdateEffect(() => {
    onScroll?.(y > 5);
  }, [y]);

  return (
    <Box
      ref={elRef}
      className='overflow-auto px-6 mb-6 flex-1'
      id='routes'
      {...rest}
    />
  );
};

interface MobileNavContentProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export const MobileNaveContent = (props: MobileNavContentProps) => {
  const { isOpen, onClose } = props;
  const closeBtnRef = React.useRef<HTMLButtonElement>();
  const { pathname } = useRouter();

  useRouteChanged(onClose);

  useUpdateEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => {
        closeBtnRef.current?.focus();
      });
    }
  }, [isOpen]);

  const [shadow, setShadow] = React.useState<string>();

  return (
    <AnimatePresence>
      {isOpen && (
        <RemoveScroll forwardProps>
          <motion.nav
            transition={{ duration: 0.08 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <Box className='h-screen absolute top-0 left-0 w-full pt-3 bg-white z-10 flex flex-col overflow-auto pb-8'>
              <Box>
                <Box className='px-4'>
                  <Stack row className='items-center'>
                    <Logo />
                    <CloseButton
                      ref={closeBtnRef}
                      className='ml-auto'
                      onClick={onClose}
                    />
                  </Stack>
                </Box>
                <Box className={`px-6 mt-6 pb-4`}>
                  <Stack col spacing='3' className='mb-3'>
                    <NavLink href='/blog'>Blog</NavLink>
                    <NavLink href='/about'>About</NavLink>
                    <NavLink href='/works'>Works</NavLink>
                    <NavLink href='/contact'>contact</NavLink>
                  </Stack>
                </Box>
              </Box>

              <ScrollView
                onScroll={(scrolled) => {
                  setShadow(scrolled ? 'md' : undefined);
                }}
              >
                <SidebarContent
                  pathname={pathname}
                  routes={getRoutes(pathname)}
                />
              </ScrollView>
            </Box>
          </motion.nav>
        </RemoveScroll>
      )}
    </AnimatePresence>
  );
};

export const MobileNavButton = React.forwardRef(
  (props: IconButtonProps, ref: React.Ref<any>) => {
    const { toggleColorMode: toggleMode } = useColorMode();
    const text = useColorModeValue('dark', 'light');
    const SwitchIcon = useColorModeValue(FaMoon, FaSun);
    return (
      <div className='md:hidden justify-end flex items-center'>
        <IconButton
          size='md'
          className='text-lg sm:ml-3'
          text='current'
          aria-label={`Switch to ${text} mode`}
          variant='ghost'
          onClick={toggleMode}
          icon={<SwitchIcon />}
        />
        <IconButton
          className='md:hidden text-xl  ml-3'
          ref={ref}
          css={{
            paddingLeft: '5px !important',
            paddingRight: '5px !important',
          }}
          aria-label='Open menu'
          text='current'
          variant='ghost'
          icon={<AiOutlineMenu />}
          {...props}
        />
      </div>
    );
  },
);
