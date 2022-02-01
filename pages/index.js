import Head from 'next/head';
import Header from '../components/Header';
import Feed from '../components/Feed';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Modal from '../components/Modal';

export default function Home() {
  return (
    <div className="bg-gray-50 h-screen
      overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Insta 2.0</title>
        <meta name="description" content="Instagram CLONE APP For Educational Purposes" />
      </Head>

      <main>
        {/* HEADER bar */}
        <Header/>
        {/* FEED Components*/}
        <Feed />
        {/* MODAL Component*/}
        <Modal />

      </main>
    </div>
  )
}
