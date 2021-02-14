import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from 'components/color-mode/color-mode';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head />
        <body>
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
