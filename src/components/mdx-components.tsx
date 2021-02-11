/** ** */
import * as React from 'react';
import { Alert, Box, PropsOf, Divider, clsx } from '@nature-ui/core';
import CodeBlock from './codeblock/codeblock';
import { El, Styled } from './nature-jsx-elements';

const Pre = ({ className, ...props }) => {
  return (
    <El.div className={'py-8'}>
      <El.pre
        className={clsx('rounded-lg p-4 ')}
        css={{
          lineHeight: '1.2',
          tabSize: '2',
          fontFamily: '"Ubuntu Mono", "SF Mono", Menlo, monospace',
          color: '#fff',
          background: '#011627',
          hyphens: 'none',
        }}
        {...props}
      />
    </El.div>
  );
};

const Table = (props) => (
  <El.div className='overflow-x-hidden'>
    <El.table className='text-left mt-8 w-full' {...props} />
  </El.div>
);

const THead = (props) => (
  <El.th
    className='bg-gray-25 bg-opacity-10 p-2 font-semibold text-sm '
    {...props}
  />
);

const TData = (props) => (
  <El.td
    className='p-2 border-t text-sm whitespace-normal'
    css={{ borderColor: 'inherit' }}
    {...props}
  />
);

const LinkedHeading = (props: PropsOf<typeof El.h2>) => {
  const { children, id } = props;
  const [hover, setHover] = React.useState(false);

  const handleHover = () => {
    setHover(!hover);
  };

  return (
    <El.h2
      data-group=''
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      css={{ scrollMarginBlock: '6.875rem' }}
      {...props}
    >
      <span>{children}</span>
      {id && (
        <El.a
          aria-label='anchor'
          href={`#${id}`}
          className={clsx(
            'text-primary-100 focus:opacity-100 focus:shadow-outline opacity-0 ml-2 outline-none hover:opacity-100 rounded-md',
            {
              'opacity-100': hover,
            },
          )}
        >
          #
        </El.a>
      )}
    </El.h2>
  );
};

const InlineCode = (props: any) => (
  <El.code className='text-accent-600 text-sm' {...props} />
);

const MDXComponents = {
  h1: (props) => <Styled.h1 className='text-3xl leading-5' {...props} />,
  h2: (props) => (
    <LinkedHeading
      className='text-2xl mt-16 mb-2 font-medium leading-5'
      {...props}
    />
  ),
  h3: (props) => (
    <LinkedHeading className='text-xl font-medium mt-6' as='h3' {...props} />
  ),
  h4: (props) => <LinkedHeading as='h4' {...props} />,
  hr: (props) => <Divider {...props} />,
  strong: (props) => <Box as='strong' className='font-medium ' {...props} />,
  inlineCode: InlineCode,
  // code: CodeBlock,
  pre: Pre,
  // kbd: Kbd,
  br: (props) => <Box height='24px' {...props} />,
  table: Table,
  th: THead,
  td: TData,
  a: (props) => (
    <El.a className='text-primary-100 hover:underline' {...props} />
  ),
  p: (props) => <El.p className='mt-5 leading-7' {...props} />,
  ul: (props) => <El.ul className='mt-7 ml-7' {...props} />,
  ol: (props) => <El.ol {...props} />,
  li: (props) => <El.li className='pb-1 list-disc' {...props} />,
  blockquote: (props) => (
    <Alert
      className='mt-4 rounded-md my-6'
      role='none'
      status='warning'
      variant='left-accent'
      as='blockquote'
      {...props}
    />
  ),
  // 'carbon-ad': CarbonAd,
  // ComponentLinks,
  // IconsList,
  // PropsTable,
};

export default MDXComponents;
