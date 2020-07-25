import React from 'react';

import styles from './Portfolio.module.css';
import menj from '../../assets/img/menj.png';
import importFont from '../../assets/img/import-font.png';
import opinae from '../../assets/img/opinae.png';
import frases from '../../assets/img/frases.jpg';
import memoryGame from '../../assets/img/memory-game.jpg';
import gematria from '../../assets/img/gematria.jpg';
import circleProgress from '../../assets/img/circle-progress-stats.png';

const links = [
  {
    href: 'https://www.npmjs.com/package/menj',
    src: menj,
    alt: 'MENJ'
  },
  {
    href: 'https://marketplace.visualstudio.com/items?itemName=titenq.import-font',
    src: importFont,
    alt: 'Import Font'
  },
  {
    href: 'https://opinae.vercel.app/',
    src: opinae,
    alt: 'Opinaê'
  },
  {
    href: 'https://titenq.github.io/frases/',
    src: frases,
    alt: 'Frases'
  },
  {
    href: 'https://titenq.github.io/cartoon-memory-game/',
    src: memoryGame,
    alt: 'Cartoon Memory Game'
  },
  {
    href: 'https://titenq.github.io/gematria/',
    src: gematria,
    alt: 'Gematria'
  },
  {
    href: 'https://titenq.github.io/circle-progress-stats/',
    src: circleProgress,
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
