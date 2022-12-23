import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Doctor Service BD</title>
        <meta name="description" content="Doctor Service BD" />
        <meta name="keyword" content="Doctor Service BD" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <div>
            <a
              href="https://www.facebook.com/doctorservicebd"
              target="_blank"
              rel="noopener noreferrer">
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <Link href={'./doctors'} className={styles.card}>
            <h2 className={inter.className}>
              Doctors <span>-&gt;</span>
            </h2>
            <p className={inter.className}>Find Best Professionals.</p>
          </Link>

          <Link href={'./hospitals'} className={styles.card}>
            <h2 className={inter.className}>
              Hospitals & Diagnostics <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find Best Health Care Centers For You.
            </p>
          </Link>

          <Link href={'./about'} className={styles.card}>
            <h2 className={inter.className}>
              About Us <span>-&gt;</span>
            </h2>
            <p className={inter.className}>We Care About Your Health.</p>
          </Link>

          <Link href={'./contact'} className={styles.card}>
            <h2 className={inter.className}>
              Contact Us <span>-&gt;</span>
            </h2>
            <p className={inter.className}>We are here for you 24/7.</p>
          </Link>
        </div>
      </main>
    </>
  );
}
