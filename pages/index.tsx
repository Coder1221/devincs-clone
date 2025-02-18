import type { NextPage } from "next";
import ValueProps from "../components/ValueProps";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import {
  SiAmazon,
  SiKubernetes,
  SiTensorflow,
  SiRaspberrypi,
  SiArm,
  SiNvidia,
  SiDocker,
} from "react-icons/si";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Devincs - Architects of the Connected Future</title>
        <meta
          name="description"
          content="Engineering Intelligence into Every Layer of Tomorrow"
        />
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
            <h1>
              From Silicon to Software: Engineering the Future, One Byte at a
              Time
            </h1>
            <p>
              Devincs delivers end-to-end solutions for enterprises bridging the
              digital and physical worlds
            </p>
            <div className={styles.ctaButtons}>
              <button className={styles.primaryBtn}>
                Build Your Connected Solution
              </button>
              <button className={styles.secondaryBtn}>
                Explore Our Impact Stories →
              </button>
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
              <p>
                Hardened systems with zero-trust architecture for
                mission-critical applications.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Scale with Precision</h3>
              <p>
                Deploy IoT solutions that grow with your business, not against
                it.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.devincsDifference}>
          <div className={styles.splitScreen}>
            <div className={styles.leftPanel}>
              <h2>The Devincs Difference</h2>
              <h3>
                Where Hardware Meets Hard Code: Synchronized teams for unified
                outcomes
              </h3>
            </div>
            <div className={styles.rightPanel}></div>
          </div>
        </section>

        <section className={styles.caseStudies}>
          <h2>Impact Stories</h2>
          <div className={styles.carousel}>
            <div className={styles.caseStudyCard}>
              <h3>Project Titan</h3>
              <p>
                Revolutionizing Fleet Management with AI-Driven Embedded
                Telematics
              </p>
              <div className={styles.metric}>30% fuel efficiency gains</div>
            </div>
            <div className={styles.caseStudyCard}>
              <h3>Project Helix</h3>
              <p>Secure Edge-to-Cloud Platform for Pharmaceutical IoT</p>
              <div className={styles.metric}>FDA-compliant data pipelines</div>
            </div>
            <div className={styles.caseStudyCard}>
              <h3>Project Nova</h3>
              <p>ML-Powered Predictive Maintenance for Wind Turbines</p>
              <div className={styles.metric}>20% downtime reduction</div>
            </div>
          </div>
        </section>

        {/* <ValueProps /> */}
        <section className={styles.techStack}>
          <h2>Technology Stack</h2>
          <p className={styles.techTagline}>Tool Agnostic, Outcome Obsessed</p>
          <motion.div
            className={styles.techGrid}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              className={styles.techLogo}
              whileHover={{ scale: 1.1 }}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <SiAmazon size={48} />
              <span>AWS</span>
            </motion.div>
            <motion.div
              className={styles.techLogo}
              whileHover={{ scale: 1.1 }}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <SiKubernetes size={48} />
              <span>Kubernetes</span>
            </motion.div>
            <motion.div
              className={styles.techLogo}
              whileHover={{ scale: 1.1 }}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <SiTensorflow size={48} />
              <span>TensorFlow</span>
            </motion.div>
            <motion.div
              className={styles.techLogo}
              whileHover={{ scale: 1.1 }}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <SiDocker size={48} />
              <span>Docker</span>
            </motion.div>
            <motion.div
              className={styles.techLogo}
              whileHover={{ scale: 1.1 }}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <SiRaspberrypi size={48} />
              <span>Raspberry Pi</span>
            </motion.div>
          </motion.div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2>Ready to Transform Your Industry?</h2>
            <p>Let's Engineer Tomorrow—Today</p>
            <form className={styles.contactForm}>
              <input
                type="text"
                placeholder="Your Name"
                className={styles.formInput}
              />
              <input
                type="email"
                placeholder="Email Address"
                className={styles.formInput}
              />
              <select className={styles.formInput}>
                <option value="">I need help with...</option>
                <option value="iot">IoT Solutions</option>
                <option value="cloud">Cloud Architecture</option>
                <option value="ai">AI Integration</option>
                <option value="security">Security Solutions</option>
              </select>
              <textarea
                placeholder="Tell us about your project"
                className={styles.formTextarea}
              ></textarea>
              <button type="submit" className={styles.primaryBtn}>
                Book a Technical Deep Dive →
              </button>
            </form>
          </div>
        </section>

        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <div className={styles.footerSection}>
              <h3>Devincs</h3>
              <p>Engineering Intelligence into Every Layer of Tomorrow</p>
            </div>
            <div className={styles.footerSection}>
              <h4>Quick Links</h4>
              <a href="#services">Services</a>
              <a href="#case-studies">Case Studies</a>
              <a href="#about">About Us</a>
            </div>
            <div className={styles.footerSection}>
              <h4>Lab Notes</h4>
              <a href="#latest">Latest IoT Trends</a>
              <a href="#edge">Edge Computing</a>
            </div>
            <div className={styles.footerSection}>
              <h4>Certifications</h4>
              <div className={styles.certLogos}>
                <span>AWS</span>
                <span>ARM</span>
              </div>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>© 2023 Devincs. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
};
export default Home;
