/** ** */
import * as React from 'react';
import { clsx, nature } from '@nature-ui/core';
import BaseHighlight, { defaultProps, Language } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';

const RE = /{([\d,-]+)}/;

const calculateLinesToHighlight = (meta: string) => {
  if (!RE.test(meta)) {
    return () => false;
  }

  const lineNumbers = RE.exec(meta)[1]
    .split(',')
    .map((v) => v.split('-').map((x) => parseInt(x, 10)));

  return (index: number) => {
    const lineNumber = index + 1;
    const inRange = lineNumbers.some(([start, end]) =>
      end ? lineNumber >= start && lineNumber <= end : lineNumber === start,
    );
    return inRange;
  };
};

interface HighlightProps {
  codeString: string;
  language: Language;
  metaString?: string;
  showLines?: boolean;
}

const Highlight = ({
  codeString,
  language,
  metaString,
  showLines,
  ...props
}: HighlightProps) => {
  const shouldHighlightLine = calculateLinesToHighlight(metaString);

  return (
    <BaseHighlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
      {...props}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div data-language={language}>
          <pre
            className={className}
            style={{
              ...style,
              overflowX: 'visible',
              background: 'transparent',
            }}
          >
            {tokens.map((line, i) => {
              const { className, ...lineProps } = getLineProps({
                line,
                key: i,
              });

              return (
                <nature.div
                  className={clsx(className, {
                    'bg-green-200 bg-opacity-20 -mx-4 px-4': shouldHighlightLine(
                      i,
                    ),
                  })}
                  {...lineProps}
                >
                  <nature.span>
                    {showLines && (
                      <nature.span className='opacity-30 mr-4 text-xs select-none'>
                        {i + 1}
                      </nature.span>
                    )}
                    {line.map((token, key) => {
                      const { className, ...rest } = getTokenProps({
                        token,
                        key,
                      });

                      return <span {...rest} className={clsx(className)} />;
                    })}
                  </nature.span>
                </nature.div>
              );
            })}
          </pre>
        </div>
      )}
    </BaseHighlight>
  );
};
export default Highlight;
