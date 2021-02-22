import { nature, clsx } from '@nature-ui/core';

export const El = {
  h1: nature('h1'),
  h2: nature('h2'),
  h3: nature('h3'),
  h4: nature('h4'),
  h5: nature('h5'),
  p: nature('p'),
  pre: nature('pre'),
  table: nature('table'),
  th: nature('th'),
  td: nature('td'),
  a: nature('a'),
  span: nature('span'),
  svg: nature('svg'),
  div: nature('div'),
  code: nature('code'),
  hr: nature('hr'),
  strong: nature('strong'),
  br: nature('br'),
  ul: nature('ul'),
  ol: nature('ol'),
  li: nature('li'),
  blockquote: nature('blockquote'),
};

export const Styled = {
  h1: ({ className = '', ...props }) => (
    <El.h1
      className={clsx(
        className,
        'text-4xl md:text-6xl lg:text-7xl leading-normal font-bold',
      )}
      {...props}
    />
  ),
  h2: ({ className = '', ...props }) => (
    <El.h2
      className={clsx(
        className,
        'text-3xl md:text-4xl mb-2 font-semibold leading-relaxed',
      )}
      {...props}
    />
  ),
  h3: ({ className = '', ...props }) => (
    <El.h3 className={clsx(className, 'text-2xl font-semibold')} {...props} />
  ),
  p: ({ className = '', ...props }) => (
    <El.p className={clsx(className)} {...props} />
  ),
};
