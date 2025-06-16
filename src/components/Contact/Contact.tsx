import React from 'react';
import styles from './Contact.module.scss';

interface ContactMethod {
  label: string;
  url: string;
  external?: boolean;
}

const contactMethods: ContactMethod[] = [
  { label: 'Email', url: 'mailto:nataliamarth@gmail.com', external: true },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/natalia-marth-a7495479/', external: true },
  { label: 'Xing', url: 'https://www.xing.com/profile/Natalia_Marth', external: true },
  { label: 'GitHub', url: 'https://github.com/nataliamarth', external: true },
];


const Contact: React.FC = () => {
  return (
    <section className={styles.contactOuter}>
      <div className={styles.contactInner}>
        <div className={styles.leftColumn}>
          <h2 className={styles.title}>Contact Me</h2>
          <p className={styles.intro}>
            Here’s how you can contact me:
          </p>
        </div>

        <div className={styles.rightColumn}>
          <ul className={styles.contactList}>
            {contactMethods.map(({ label, url, external }) => (
              <li key={label} className={styles.contactItem}>
                {external ? (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contactLink}
                  >
                    {label}
                  </a>
                ) : (
                  <a href={url} className={styles.contactLink}>
                    {label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;



