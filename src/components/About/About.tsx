import React from 'react';
import styles from './About.module.scss';

const About: React.FC = () => {
  return (
    <section className={styles.aboutOuter}>
      <div className={styles.aboutInner}>
        <div className={styles.leftColumn}>
          <h2 className={styles.title}>About Me</h2>
          <p className={styles.intro}>
            I am a graduate of International Media and Computing at HTW Berlin with a strong interest in front-end development.
          </p>
        </div>

        <div className={styles.rightColumn}>
          <h3 className={styles.sectionHeading}>Skills</h3>
          <ul className={styles.skillList}>
            <li className={styles.skillItem}>React</li>
            <li className={styles.skillItem}>HTML, CSS</li>
            <li className={styles.skillItem}>TypeScript</li>
            <li className={styles.skillItem}>Python</li>
            <li className={styles.skillItem}>Swift</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;


