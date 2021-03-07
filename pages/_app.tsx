import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import ProgressBar from '@badrap/bar-of-progress';

import '../styles/index.css';
import { ColorModeProvider } from 'components/color-mode/provider';
import { YandexScript } from 'components/yandex-script';

const progress = new ProgressBar({
  size: 3,
  className: 'bar-of-progress',
  delay: 100,
});

if (typeof window !== 'undefined') {
  progress.start();
  progress.finish();
}

export default function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    Router.events.on('routeChangeStart', progress.start);
    Router.events.on('routeChangeComplete', () => {
      progress.finish();
      window.scrollTo(0, 0);
    });
    Router.events.on('routeChangeError', progress.finish);
  }, []);

  return (
    <>
      <Head>
        <meta name='theme-color' content='#111516' />
        <meta name='color-scheme' content='dark' />
        <meta content='IE=edge' httpEquiv='X-UA-Compatible' />
        <meta content='width=device-width, initial-scale=1' name='viewport' />
        <link rel='icon' type='image/png' sizes='96x96' href='/favicon.png' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://static.cloudflareinsights.com' />
        <meta name='yandex-verification' content='04504247f14d7c37' />
      </Head>
      <ColorModeProvider
        options={{
          initialColorMode: 'system',
        }}
      >
        <Component {...pageProps} />
      </ColorModeProvider>
      <YandexScript />
    </>
  );
}
