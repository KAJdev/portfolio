import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import {
  Github,
  Twitter
} from 'lucide-react';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kaj</title>
        <meta name="description" content="Hey, I'm kaj! Check me out!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          I&apos;m Kaj!
        </h1>

        <p className={styles.description}>
          I&apos;ve done a couple things.
        </p>

        <div style={{display: 'flex', flexDirection: 'row'}}>
          <a href="https://github.com/kajdev" target='_blank'>
            <Github size={40} style={{marginRight: '1em'}} className={styles.linkItem} />
          </a>
          <a href="https://twitter.com/KAJ718" target='_blank'>
            <Twitter size={40} style={{marginLeft: '1em'}} className={styles.linkItem} />
          </a>
        </div>
      </main>
    </div>
  )
}
