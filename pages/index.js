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
        <div className='w-[40em] text-left'>

          <h1 className="text-6xl font-semibold">
            Kaj
          </h1>

          <p className='font-mono mt-3'>
            Full-stack engineer and Computer Science student.
          </p>

          <h2 className='font-mono font-semibold text-[#c0c0c0] text-lg mt-5'>
            CONTACT
          </h2>

          <div style={{display: 'flex', flexDirection: 'row', marginTop: '0.5em'}}>
            <a href="https://github.com/kajdev" target='_blank' rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 hover:scale-110 fill-transparent hover:fill-blue-400 hover:text-blue-400 transition duration-200 ease-in-and-out" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a href="https://twitter.com/KAJ718" target='_blank' rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" className="mx-2 hover:scale-110 fill-transparent hover:fill-blue-400 hover:text-blue-400 transition duration-200 ease-in-and-out" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5 0-.28-.03-.56-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
            <a href='mailto:kaj@otter.university'>
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 hover:scale-110 fill-transparent hover:fill-blue-400 hover:text-blue-400 transition duration-200 ease-in-and-out" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
          </div>

          <h2 className='font-mono font-semibold text-[#c0c0c0] text-lg mt-5'>
            EXPERIENCE
          </h2>

          <div className='flex flex-row '>
            Still building this out...
          </div>

          <h2 className='font-mono font-semibold text-[#c0c0c0] text-lg mt-5'>
            SKILLS
          </h2>

          <div className='flex flex-row '>
            <img src="https://skillicons.dev/icons?i=python,cs,unity,rust,js,nodejs,mongodb,redis,git,react,next,html,css,tailwind,cloudflare,discord,docker,figma,pr,flask,linux," />
          </div>
        </div>
      </main>
    </div>
  )
}
