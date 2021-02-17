/** ** */
import * as React from 'react';
import {
  nature,
  PropsOf,
  Button,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  Box,
  clsx,
  Portal,
} from '@nature-ui/core';
import { SearchIcon } from '@nature-ui/icons';
import Link from 'next/link';
import Head from 'next/head';
import { DocSearchModal, useDocSearchKeyboardEvents } from '@docsearch/react';
import { useRouter } from 'next/router';
import { startsWith } from 'lodash/fp';

const startsWithCss = startsWith('css-');

const ACTION_KEY_DEFAULT = ['Ctrl', 'Control'];
const ACTION_KEY_APPLE = ['⌘', 'Command'];

function Hit(props) {
  const { hit, children } = props as any;
  return (
    <Link href={hit.url}>
      <a>{children}</a>
    </Link>
  );
}

export const SearchButton = React.forwardRef(
  (props: PropsOf<typeof nature.button>, ref: React.Ref<HTMLButtonElement>) => {
    const [actionKey, setActionKey] = React.useState<string[]>(
      ACTION_KEY_APPLE,
    );

    React.useEffect(() => {
      if (typeof navigator === 'undefined') return;

      const isMac = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);

      if (!isMac) {
        setActionKey(ACTION_KEY_DEFAULT);
      }
    }, []);

    return (
      <Button
        ref={ref}
        {...props}
        variant='none'
        className='w-full px-4 py-3 focus:ring focus:outline-none rounded-xl duration-200 border border-dark-200 focus:border-transparent'
      >
        <Stack row className='items-center'>
          <SearchIcon className='text-dark-200' />
          <p className='text-dark-400'>Search the docs</p>
        </Stack>
      </Button>
    );
  },
);

export const SearchInput = ({ className = '', ...props }) => {
  const [actionKey, setActionKey] = React.useState<string[]>(ACTION_KEY_APPLE);

  React.useEffect(() => {
    if (typeof navigator === 'undefined') return;

    const isMac = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);

    if (!isMac) {
      setActionKey(ACTION_KEY_DEFAULT);
    }
  }, []);

  return (
    <Box
      className={clsx(
        className,
        'px-4 py-3 border flex items-center rounded-xl',
      )}
      {...props}
    >
      <SearchIcon className='text-dark-200' />
      <nature.input
        className='ml-3 focus:outline-none bg-transparent'
        placeholder='Search'
      />
    </Box>
  );
};

export function Search() {
  // const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);
  const searchButtonRef = React.useRef();
  const [initialQuery, setInitialQuery] = React.useState(null);

  const onOpen = React.useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const onClose = React.useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const onInput = React.useCallback(
    (e) => {
      setIsOpen(true);
      setInitialQuery(e.key);
    },
    [setIsOpen, setInitialQuery],
  );

  useDocSearchKeyboardEvents({
    isOpen,
    onOpen,
    onClose,
    onInput,
    searchButtonRef,
  });

  return (
    <>
      <Head>
        <link
          rel='preconnect'
          href='https://BH4D9OD16A-dsn.algolia.net'
          crossOrigin='true'
        />
      </Head>
      {/* <SearchStyle /> */}
      <SearchButton onClick={onOpen} ref={searchButtonRef} />
      {isOpen && (
        <Modal isOpen={isOpen} onClose={onClose} size='md'>
          <ModalOverlay className='z-50'>
            <ModalContent className='mx-4'>
              <SearchInput />
            </ModalContent>
          </ModalOverlay>
        </Modal>
      )}
    </>
  );
}
