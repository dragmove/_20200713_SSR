import React from "react";
import { AppProps } from "next/app";

import "../styles/normalize.css";
import "../styles/reset.css";
import "../styles/typography.css";

// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
