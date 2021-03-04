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
  ModalBody,
  Box,
  clsx,
  useDisclosure,
  Badge,
} from '@nature-ui/core';
import { SearchIcon } from '@nature-ui/icons';
import Link from 'next/link';
import Head from 'next/head';
import { matchSorter } from 'match-sorter';

import data from 'configs/search-metadata.json';
import { Styled } from './nature-jsx-elements';
import { getNChars } from 'utils/getNChars';

const ACTION_KEY_DEFAULT = ['Ctrl', 'Control'];
const ACTION_KEY_APPLE = ['⌘', 'Command'];

export const SearchButton = React.forwardRef(
  (
    { className = '', ...props }: PropsOf<typeof nature.button>,
    ref: React.Ref<HTMLButtonElement>,
  ) => {
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
        className={clsx(
          className,
          'w-full px-4 py-3 focus:ring focus:outline-none rounded-xl duration-200 border border-dark-200 focus:border-transparent',
        )}
      >
        <Stack row className='items-center'>
          <SearchIcon className='text-dark-200' />
          <p className='text-dark-400'>Search</p>
        </Stack>
      </Button>
    );
  },
);

export const SearchInput = ({ className = '', onChange, ...props }) => {
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
        onChange={onChange}
        className='ml-3 focus:outline-none bg-transparent'
        placeholder='Search'
      />
    </Box>
  );
};

export function Search(props) {
  // const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [query, setQuery] = React.useState('');
  const searchButtonRef = React.useRef();

  const handleChange = (e: any): void => {
    setQuery(e.target.value);
  };

  const result =
    query.length && data
      ? matchSorter(data, query, { keys: ['title', 'description', 'tags'] })
      : [];

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
      <SearchButton onClick={onOpen} {...props} ref={searchButtonRef} />
      {isOpen && (
        <Modal isOpen={isOpen} onClose={onClose} size='xl'>
          <ModalOverlay className='z-50'>
            <ModalContent className='mx-4'>
              <SearchInput onChange={handleChange} />

              {result.length ? (
                <ModalBody>
                  {result.map((item) => (
                    <Link href={item.url} key={item.title}>
                      <a>
                        <Box className='hover:bg-primary-600 my-2 bg-opacity-20 bg-gray-300 p-4 rounded-xl group group'>
                          <Styled.h4 className='group-hover:text-gray-100'>
                            {getNChars(item.title, 55)}
                          </Styled.h4>
                          {item.tags && (
                            <Stack row spacing='2' className='my-2'>
                              {item.tags.map((tag, i) => (
                                <Badge
                                  color='accent-700'
                                  variant='solid'
                                  key={tag + i}
                                >
                                  {tag}
                                </Badge>
                              ))}
                            </Stack>
                          )}
                          <Styled.p className='group-hover:text-gray-200'>
                            {getNChars(item.title, 75)}
                          </Styled.p>
                        </Box>
                      </a>
                    </Link>
                  ))}
                </ModalBody>
              ) : null}
            </ModalContent>
          </ModalOverlay>
        </Modal>
      )}
    </>
  );
}
