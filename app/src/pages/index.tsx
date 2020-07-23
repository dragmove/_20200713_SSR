import React from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link';
import Head from 'next/head';
import Layout, { name, siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.scss';

// TODO: learn how to use browserslist // Ref: https://github.com/browserslist
// TODO: make env to compile sass

/*
// TODO: https://nextjs.org/learn/basics/assets-metadata-css
static file, // x
<head> for each page, // x
make reusable component with css modules, // 
add global css in 'pages/_app.js'
tips for Next.js
*/

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={`${utilStyles.headingMd} ${utilStyles.hoverAction}`}>
        <p>I'm {name}</p>
        <p>
          This is sample <a href="https://nextjs.org/learn">our Next.js tutorial</a>
        </p>
      </section>
    </Layout>
  );
}
