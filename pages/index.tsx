
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

        <section className={styles.devincsDifference}>
          <div className={styles.splitScreen}>
            <div className={styles.leftPanel}>
              <h2>The Devincs Difference</h2>
              <h3>Where Hardware Meets Hard Code: Synchronized teams for unified outcomes</h3>
            </div>
            <div className={styles.rightPanel}></div>
          </div>
        </section>

        <section className={styles.caseStudies}>
          <h2>Impact Stories</h2>
          <div className={styles.carousel}>
            <div className={styles.caseStudyCard}>
              <h3>Project Titan</h3>
              <p>Revolutionizing Fleet Management with AI-Driven Embedded Telematics</p>
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

        <section className={styles.techStack}>
          <h2>Technology Stack Showcase</h2>
          <p className={styles.techTagline}>Tool Agnostic, Outcome Obsessed</p>
          <div className={styles.techGrid}>
            <div className={styles.techCategory}>
              <h3>Software</h3>
              <div className={styles.techLogos}>
                <span>AWS</span>
                <span>Kubernetes</span>
                <span>TensorFlow</span>
                <span>ROS</span>
              </div>
            </div>
            <div className={styles.techCategory}>
              <h3>Hardware</h3>
              <div className={styles.techLogos}>
                <span>ARM Cortex</span>
                <span>Raspberry Pi</span>
                <span>LoRaWAN</span>
                <span>NVIDIA Jetson</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.techStack}>
          <h2>Technology Stack</h2>
          <p className={styles.techTagline}>Tool Agnostic, Outcome Obsessed</p>
          <div className={styles.techGrid}>
            <div className={styles.techLogo}>
              <img src="/aws.png" alt="AWS" />
              <span>AWS</span>
            </div>
            <div className={styles.techLogo}>
              <img src="/kubernetes.png" alt="Kubernetes" />
              <span>Kubernetes</span>
            </div>
            <div className={styles.techLogo}>
              <img src="/tensorflow.png" alt="TensorFlow" />
              <span>TensorFlow</span>
            </div>
            <div className={styles.techLogo}>
              <img src="/ros.png" alt="ROS" />
              <span>ROS</span>
            </div>
            <div className={styles.techLogo}>
              <img src="/arm.png" alt="ARM Cortex" />
              <span>ARM Cortex</span>
            </div>
            <div className={styles.techLogo}>
              <img src="/raspberry-pi.png" alt="Raspberry Pi" />
              <span>Raspberry Pi</span>
            </div>
            <div className={styles.techLogo}>
              <img src="/nvidia.png" alt="NVIDIA Jetson" />
              <span>NVIDIA Jetson</span>
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2>Ready to Transform Your Industry?</h2>
            <p>Let's Engineer Tomorrow—Today</p>
            <form className={styles.contactForm}>
              <input type="text" placeholder="Your Name" className={styles.formInput} />
              <input type="email" placeholder="Email Address" className={styles.formInput} />
              <select className={styles.formInput}>
                <option value="">I need help with...</option>
                <option value="iot">IoT Solutions</option>
                <option value="cloud">Cloud Architecture</option>
                <option value="ai">AI Integration</option>
                <option value="security">Security Solutions</option>
              </select>
              <textarea placeholder="Tell us about your project" className={styles.formTextarea}></textarea>
              <button type="submit" className={styles.primaryBtn}>Book a Technical Deep Dive →</button>
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
