import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Signin from '../components/signin.jsx'
import Signup from '../components/Signup.jsx'
import UserProfile from '../components/UserProfile'
import NabBar from '../components/NavBar/NabBar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Matcha</title>
        <meta name="description" content="dating app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Signin /> */}
    {/* <Signup /> */}
    {/* <UserProfile /> */}
    <NabBar />

    </div>
  )
}
