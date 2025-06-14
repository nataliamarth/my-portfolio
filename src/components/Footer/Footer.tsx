import React from 'react';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footerOuter}>
      <div className={styles.footerInner}>
        <p>© {new Date().getFullYear()} Natalia Marth. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
