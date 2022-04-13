import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

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
          I'm Kaj!
        </h1>

        <p className={styles.description}>
          I've done a couple things.
        </p>
      </main>
    </div>
  )
}
