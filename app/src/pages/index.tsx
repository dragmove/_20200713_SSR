import React from "react";
import ReactDOM from "react-dom";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>hello</h1>

        <article>
          <p>
            Learn <a href="https://nextjs.org">Next.js!</a>
          </p>
          <p>
            Read :
            <Link href="/posts/first-post">
              <a>this page!</a>
            </Link>
          </p>
        </article>
      </main>
    </div>
  );
}
