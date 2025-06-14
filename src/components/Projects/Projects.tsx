import React from 'react';
import styles from './Projects.module.scss';

const projectData = [
  {
    name: 'Currency Converter',
    url: 'https://github.com/nataliamarth/CurrencyConverter'
  },
  {
    name: 'An Unreal Engine 5 project with automated tests to build a Jenkins test pipeline.',
    url: 'https://github.com/nataliamarth/DevOps-UE-Game'
  },
  {
    name: 'Bachelor Thesis: The Impact of the Customizable VR Environments on Stress Reduction',
    url: '/projects/vr-app'
  },

];

const Projects: React.FC = () => {
  return (
    <section className={styles.projectsOuter}>
      <div className={styles.projectsInner}>
        <div className={styles.leftColumn}>
          <h2 className={styles.title}>Projects</h2>
          <p className={styles.intro}>
            Here are some of my recent projects. <br />
          </p>
        </div>

        <div className={styles.rightColumn}>
          <ul className={styles.itemList}>
            {projectData.map((proj) => (
              <li key={proj.name} className={styles.item}>
                <a
                  href={proj.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.itemLink}
                >
                  {proj.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};


export default Projects;


