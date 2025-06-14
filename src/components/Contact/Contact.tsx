import React from 'react';
import styles from './Contact.module.scss';

const Contact: React.FC = () => {
  return (
    <section className={styles.contactOuter}>
      <div className={styles.contactInner}>
        <div className={styles.leftColumn}>
          <h2 className={styles.title}>Contact Me</h2>
          <p className={styles.intro}>
            Here’s how you can contact me.
          </p>
        </div>

        <div className={styles.rightColumn}>
          <ul className={styles.itemList}>
            <li className={styles.item}>
              <a
                href="mailto:nataliamarth@gmail.com"
                className={styles.contactLink}
              >
                Email
              </a>
            </li>
            <li className={styles.item}>
              <a
                href="https://www.linkedin.com/in/natalia-marth-a7495479/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                LinkedIn
              </a>
            </li>
            <li className={styles.item}>
              <a
                href="https://www.xing.com/profile/Natalia_Marth"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                Xing
              </a>
            </li>
            <li className={styles.item}>
              <a
                href="https://github.com/nataliamarth"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;



