import styles from './layout.module.scss';
import utilStyles from '../styles/utils.module.scss';
import Link from 'next/link';
import Head from 'next/head';

export const title = 'Mapbox gl';
export const siteTitle = 'Next.js + React + Mapbox GL JS';

const Layout = ({ children, home }: any) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Learn how to build Nex.js application" />
        <meta name="og:title" content={siteTitle} />
      </Head>

      <header className={styles.header}>
        {home ? (
          <>
            <h1 className={utilStyles.heading2Xl}>{title}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/profile.png"
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={title}
                />
              </a>
            </Link>

            <h2 className={utilStyles.heading}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{title}</a>
              </Link>
            </h2>
          </>
        )}
      </header>

      <main>{children}</main>

      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Layout;
