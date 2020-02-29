import * as React from "react";
import { AppProps } from "next/app";
import "../styles/style.css";
import { ThemeProvider } from "theme-ui";
import theme from "../theme";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
