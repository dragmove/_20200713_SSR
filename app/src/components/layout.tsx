import styles from './layout.module.scss';
import utilStyles from '../styles/utils.module.scss';
import Link from 'next/link';
import Head from 'next/head';

export const name = 'Hyunseok Kim';
export const siteTitle = 'Next.js Sample Website';

const Layout = ({ children, home }: any) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="favicon.ico" />
        <meta name="description" content="Learn how to build Nex.js application" />
        <meta name="og:title" content={siteTitle} />
      </Head>

      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/profile.png"
              alt={name}
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/profile.png"
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={name}
                />
              </a>
            </Link>

            <h2 className={utilStyles.heading}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
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
