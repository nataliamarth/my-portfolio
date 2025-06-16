import React from 'react';
import styles from './Home.module.scss';

const Home: React.FC = () => {
  return (
    <section className={styles.homeOuter}>
      <div className={styles.homeInner}>
        <div className={styles.leftColumn}>
          <h2 className={styles.title}>Natalia Marth</h2>
          <p className={styles.intro}>
             Front-End Developer | Berlin
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
