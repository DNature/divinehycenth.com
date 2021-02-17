import * as React from 'react';
import * as natureComponents from '@nature-ui/core';
import { MDXProvider } from '@mdx-js/react';

import MDXComponents from 'components/mdx-components';
import PageContainer from 'components/page-container';

const MDXLayout = ({ frontMatter, children }) => {
  return (
    <MDXProvider components={{ ...natureComponents, ...MDXComponents }}>
      <PageContainer frontMatter={frontMatter}>{children}</PageContainer>
    </MDXProvider>
  );
};

export default MDXLayout;
