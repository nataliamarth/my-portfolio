import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  const location = useLocation();

  const showNav = location.pathname !== '/';

  return (
    <header className={styles.headerOuter}>
      <div className={styles.headerInner}>
        {showNav && (
          <nav className={styles.nav}>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;


