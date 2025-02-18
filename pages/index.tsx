
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Devincs - Architects of the Connected Future</title>
        <meta name="description" content="Engineering Intelligence into Every Layer of Tomorrow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>Devincs</div>
          <div className={styles.navLinks}>
            <a href="#services">Services</a>
            <a href="#industries">Industries</a>
            <a href="#case-studies">Case Studies</a>
            <a href="#about">About Us</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <main>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>From Silicon to Software: Engineering the Future, One Byte at a Time</h1>
            <p>Devincs delivers end-to-end solutions for enterprises bridging the digital and physical worlds</p>
            <div className={styles.ctaButtons}>
              <button className={styles.primaryBtn}>Build Your Connected Solution</button>
              <button className={styles.secondaryBtn}>Explore Our Impact Stories →</button>
            </div>
          </div>
        </section>

        <section className={styles.valueProps}>
          <h2>Why Devincs?</h2>
          <div className={styles.cards}>
            <div className={styles.card}>
              <h3>Full-Stack Mastery</h3>
              <p>From PCB design to cloud APIs—we own the stack.</p>
            </div>
            <div className={styles.card}>
              <h3>Security Embedded by Design</h3>
              <p>Hardened systems with zero-trust architecture for mission-critical applications.</p>
            </div>
            <div className={styles.card}>
              <h3>Scale with Precision</h3>
              <p>Deploy IoT solutions that grow with your business, not against it.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
