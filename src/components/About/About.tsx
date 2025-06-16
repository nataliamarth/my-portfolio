import React from 'react';
import styles from './About.module.scss';

const skills = [
  'React',
  'HTML, CSS',
  'TypeScript',
  'Python',
  'Swift',
];

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
            {skills.map((skill) => (
              <li key={skill} className={styles.skillItem}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;


