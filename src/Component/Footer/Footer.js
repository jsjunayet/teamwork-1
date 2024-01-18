

import React from 'react';
import styles from './Footer.module.css'; 

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerRight}>
          <p>&copy; 2024 Electronic Voting System</p>
          <p>Designed and developed by Team Work</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
