import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import BackgroundAnimation from "../components/BackgroundAnimation";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Devincs - Architects of the Connected Future</title>
        <meta name="description" content="Engineering the Future, One Byte at a Time" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>Devincs</div>
          <div className={styles.navLinks}>
            <a href="#services">Services</a>
            <a href="#case-studies">Case Studies</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <main>
        <section className={styles.hero}>
          <BackgroundAnimation />
          <div className={styles.heroContent}>
            <h1>From Silicon to Software: Engineering the Future, One Byte at a Time</h1>
            <p>Devincs delivers end-to-end solutions for enterprises bridging the digital and physical worlds</p>
            <div className={styles.ctaButtons}>
              <button className={styles.primaryBtn}>Get Started</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;