import * as React from "react";

import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
							window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'UA-145785346-1');
						`
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
