import { Box, Button, ButtonType, useClipboard } from '@nature-ui/core';
import React from 'react';
import Highlight from './highlight';

const CopyButton = ({ className, ...props }: ButtonType) => (
  <Button
    size='xs'
    color='primary-600'
    variant='solid'
    className={`${className} uppercase text-xs top-3 right-5 z-10`}
    css={{ position: 'absolute' }}
    {...props}
  />
);

const CodeContainer = ({ className, ...props }: any) => (
  <Box
    className={`${className} p-4 rounded-lg editor__component`}
    css={{ backgroundColor: '#07080c' }}
    {...props}
  />
);

function CodeBlock(props) {
  const { className, children, metastring, viewlines, ...rest } = props;

  const language = className && className.replace(/language-/, '');

  const { copied, onCopy } = useClipboard(children);

  return (
    <>
      <Box className='relative z-0 my-8 editor__component' {...rest}>
        <CodeContainer className='overflow-x-auto code_container'>
          <Highlight
            codeString={children.trim()}
            language={language}
            metaString={metastring}
            showLines={viewlines}
          />
        </CodeContainer>
        <CopyButton onClick={onCopy}>{copied ? 'copied' : 'copy'}</CopyButton>
      </Box>
    </>
  );
}

CodeBlock.defaultProps = {
  mountStylesheet: false,
};

export default CodeBlock;
