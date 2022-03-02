import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Signin from './components/signin'
import Signup from './components/signup'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Matcha</title>
        <meta name="description" content="dating app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Signin /> */}
      <Signup />

    </div>
  )
}
