import utilStyles from '../styles/utils.module.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link';
import Head from 'next/head';
import Layout, { name, siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';

// TODO: make env to compile sass

/*
// TODO: https://nextjs.org/learn/basics/assets-metadata-css
static file, // x
<head> for each page, // x
make reusable component with css modules, // 
add global css in 'pages/_app.js'
tips for Next.js
*/

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
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

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

/*
// TODO: https://nextjs.org/learn/basics/dynamic-routes
How to statically generate pages with dynamic routes using getStaticPaths.
How to write getStaticProps to fetch the data for each blog post.
How to render markdown using remark.
How to pretty-print date strings.
How to link to a page with dynamic routes.
Some useful information on dynamic routes.
*/
