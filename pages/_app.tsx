import * as React from "react";
import { AppProps } from "next/app";
import "../styles/style.css";
import { ThemeProvider } from "theme-ui";
import Prism from "@theme-ui/prism";

import theme from "../theme";

// This default export is required in a new `pages/_app.js` file.
const components = {
  pre: ({ children }: any): JSX.Element => (<>{children}</>) as JSX.Element,
  code: Prism
};

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <ThemeProvider components={components} theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
