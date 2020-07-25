import React from 'react';

import { AiFillGithub, AiFillTwitterCircle, AiFillGoogleCircle } from 'react-icons/ai';

import styles from './Contatos.module.css';

const contatos = [
  {
    href: 'https://github.com/titenq',
    class: styles.github,
    icon: <AiFillGithub className={styles.icon} />
  },
  {
    href: 'https://twitter.com/titenq',
    class: styles.twitter,
    icon: <AiFillTwitterCircle className={styles.icon} />
  },
  {
    href: 'mailto:titenq@gmail.com?subject=Oi,%20TitenQ',
    class: styles.gmail,
    icon: <AiFillGoogleCircle className={styles.icon} />
  },
];

const Contatos = () => {
  return (
    <div className={styles.section_container}>
      <h1>Contatos</h1>
      <div className={styles.cubes_container}>
        {contatos.map((contato, index) => {
          return (
            <div key={index} className={styles.cube_container}>
              <a href={contato.href} target="_blank" rel="noopener noreferrer">
                <div className={styles.cube}>
                  <div className={`${styles.side} ${styles.back} ${contato.class}`}>
                    {contato.icon}
                  </div>
                  <div className={`${styles.side} ${styles.left} ${styles.grey}`}>
                    {contato.icon}
                  </div>
                  <div className={`${styles.side} ${styles.front} ${styles.grey}`}>
                    {contato.icon}
                  </div>
                  <div className={`${styles.side} ${styles.right} ${styles.grey}`}>
                    {contato.icon}
                  </div>
                  <div className={`${styles.side} ${styles.top} ${styles.grey}`}>
                    {contato.icon}
                  </div>
                  <div className={`${styles.side} ${styles.bottom} ${styles.grey}`}>
                    {contato.icon}
                  </div>
                </div>
              </a>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Contatos;
