// global scope styles
// import '../styles/normalize.css';
// import '../styles/reset.css';
// import '../styles/typography.css';

import '../styles/global.scss';

import React from 'react';
import { AppProps } from 'next/app';

// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
