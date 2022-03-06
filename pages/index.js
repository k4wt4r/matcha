import Head from 'next/head'
import styles from '../styles/Home.module.css'
import signin from './signin'
import signup from './signup.jsx'
import FindPartner from '../components/homePage/FindPartner'
import UserProfile from './profile'
import profile from './profile'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Matcha</title>
        <meta name="description" content="dating app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <signin /> */}
      {/* <signup /> */}
      {/* <UserProfile /> */}
      {/* <FindPartner /> */}
      <profile />

    </div>
  )
}
