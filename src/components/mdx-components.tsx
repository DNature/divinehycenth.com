/** ** */
import * as React from 'react';
import { Alert, Box, PropsOf, Divider, clsx, LazyImage } from '@nature-ui/core';
import { El, Styled } from './nature-jsx-elements';

import CodeBlock from './code/code-block';

const Pre = ({ ...props }) => {
  return (
    // <El.div className={'py-8'}>
    //   <El.pre
    //     className={clsx('rounded-lg p-4 ')}
    //     css={{
    //       lineHeight: '1.2',
    //       tabSize: '2',
    //       fontFamily: '"Ubuntu Mono", "SF Mono", Menlo, monospace',
    //       color: '#fff',
    //       background: '#000000',
    //       hyphens: 'none',
    //     }}
    //     {...props}
    //   />
    // </El.div>

    <El.div className={clsx('rounded-lg')} {...props} />
  );
};

const Table = (props) => (
  <El.div className='overflow-x-hidden'>
    <El.table className='text-left mt-8 w-full' {...props} />
  </El.div>
);

const THead = (props) => (
  <El.th
    className='bg-dark-200 bg-opacity-10 p-2 font-semibold text-sm '
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
            'text-primary-500 focus:opacity-100 focus:shadow-outline opacity-0 ml-2 outline-none hover:opacity-100 rounded-md',
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
  <El.code className='text-primary-600 text-sm' {...props} />
);

const Image = ({ src, ...props }) => {
  let fallbackSrc = src.split('.');

  if (fallbackSrc[fallbackSrc.length - 1] === 'gif') {
    fallbackSrc = fallbackSrc.join('.').replace(/\/c_scale.*?\//gis, '/w_50/');
  } else {
    fallbackSrc = src.replace(/\/c_scale.*?\//gis, '/c_scale,w_0.01/');
  }

  return (
    <div className='mt-16 grid'>
      <LazyImage
        fallbackSrc={fallbackSrc}
        src={src}
        className='h-full w-full object-cover'
        {...props}
      />
    </div>
  );
};

const MDXComponents = {
  h1: (props) => <Styled.h1 className='text-4xl' {...props} />,
  h2: (props) => (
    <LinkedHeading className='text-3xl mt-16 mb-2 font-medium' {...props} />
  ),
  h3: (props) => (
    <LinkedHeading className='text-2xl font-medium mt-6' as='h3' {...props} />
  ),
  h4: (props) => (
    <LinkedHeading as='h4' className='text-xl font-medium mt-6' {...props} />
  ),
  h5: (props) => (
    <LinkedHeading as='h5' className='text-lg font-medium mt-6' {...props} />
  ),
  hr: (props) => <Divider className='my-12' {...props} />,
  strong: (props) => <Box as='strong' className='font-medium ' {...props} />,
  inlineCode: InlineCode,
  code: CodeBlock,
  pre: Pre,
  // kbd: Kbd,
  br: (props) => <Box height='24px' {...props} />,
  img: (props) => <Image {...props} />,
  table: Table,
  th: THead,
  td: TData,
  a: (props) => (
    <El.a
      rel='noopener noreferrer'
      className='text-primary-500 hover:underline'
      {...props}
    />
  ),
  p: (props) => <El.p className='text-lg mt-5' {...props} />,
  ul: (props) => <El.ul className='mt-7' {...props} />,
  ol: (props) => <El.ol {...props} />,
  li: (props) => <El.li className='ml-8 pb-1 list-disc' {...props} />,
  blockquote: (props) => (
    <Alert
      className='mt-4 rounded-md my-6 text-dark-800'
      role='none'
      status='warning'
      variant='left-accent'
      as='blockquote'
      {...props}
    />
  ),
  dot: () => <div className='font-bold text-xl text-center my-4'>. . .</div>,
};

export default MDXComponents;
