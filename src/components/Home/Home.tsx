import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.scss';

const Home: React.FC = () => {
  return (
    <section className={styles.homeOuter}>
      <div className={styles.homeInner}>
        <div className={styles.leftColumn}>
          <h2 className={styles.title}>Natalia Marth</h2>
          <p className={styles.intro}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr.<br />
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
          </p>
        </div>

        <nav className={styles.rightColumn}>
          <ul className={styles.navList}>
            <li><Link to="/" className={styles.navLink}>Home</Link></li>
            <li><Link to="/about" className={styles.navLink}>About</Link></li>
            <li><Link to="/projects" className={styles.navLink}>Projects</Link></li>
            <li><Link to="/contact" className={styles.navLink}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Home;
