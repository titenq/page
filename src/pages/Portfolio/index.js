import React from 'react';

import styles from './Portfolio.module.css';

const links = [
  {
    href: 'https://www.npmjs.com/package/menj',
    src: '/img/menj.png',
    alt: 'MENJ'
  },
  {
    href: 'https://marketplace.visualstudio.com/items?itemName=titenq.import-font',
    src: '/img/import-font.png',
    alt: 'Import Font'
  },
  {
    href: 'https://opinae.vercel.app/',
    src: '/img/opinae.png',
    alt: 'Opinaê'
  },
  {
    href: 'https://titenq.github.io/frases/',
    src: '/img/frases.jpg',
    alt: 'Frases'
  },
  {
    href: 'https://titenq.github.io/cartoon-memory-game/',
    src: '/img/memory-game.jpg',
    alt: 'Cartoon Memory Game'
  },
  {
    href: 'https://titenq.github.io/gematria/',
    src: '/img/gematria.jpg',
    alt: 'Gematria'
  },
  {
    href: 'https://titenq.github.io/circle-progress-stats/',
    src: '/img/circle-progress-stats.png',
    alt: 'Circle Progress Stats'
  }
];

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <div className={styles.section_container}>
        <h1>Portfólio</h1>
        <div className={styles.portfolio_container}>
          <figure>
            {links.map((link, index) => {
              return (
                <a key={index} href={link.href} target='_blank' rel='noopener noreferrer'>
                  <img className={styles.portfolio_frame} src={link.src} alt={link.alt} />
                  <figcaption>{link.alt}</figcaption>
                </a>
              )
            })}
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
