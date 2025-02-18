
import type { NextPage } from "next";
import { useState } from "react";
import styles from "../styles/Login.module.css";

const Login: NextPage = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.logo}>DEVINCS</h1>
        <div className={styles.loadingText}>Loading Network Protocols (38%)</div>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>System</button>
          <button className={styles.button}>Network</button>
        </div>
        <div className={styles.glowCircle}></div>
        <div className={styles.glowArc}></div>
      </div>
    </div>
  );
};

export default Login;
