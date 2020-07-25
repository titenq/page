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
    alt: 'MENJ',
    caption: 'CLI publicado no NPM para fazer um Scaffold de API com MongoDB, Express, NodeJS e JWT.'
  },
  {
    href: 'https://marketplace.visualstudio.com/items?itemName=titenq.import-font',
    src: importFont,
    alt: 'Import Font',
    caption: 'Snippet do VS Code para importação de fonts do Google Fonts.'
  },
  {
    href: 'https://opinae.vercel.app/',
    src: opinae,
    alt: 'Opinaê',
    caption: 'Página feita em React com NextJS com os dados sendo persistidos diretamente em uma planilha do Google SpreadSheet.'
  },
  {
    href: 'https://titenq.github.io/frases/',
    src: frases,
    alt: 'Frases',
    caption: 'Front-end em Angular, back-end feito em NodeJS e AdonisJS, autenticação com JWT e banco de dados em PostgreSQL.'
  },
  {
    href: 'https://titenq.github.io/cartoon-memory-game/',
    src: memoryGame,
    alt: 'Memory Game',
    caption: 'Jogo da Memória feito com HTML, CSS e JavaScript. Cards criados com GIMP e Inkscape.'
  },
  {
    href: 'https://titenq.github.io/gematria/',
    src: gematria,
    alt: 'Gematria',
    caption: 'Calcula o valor numérico e a raiz das palavras hebraicas de acordo com a Gematria, com teclado virtual em hebraico.'
  },
  {
    href: 'https://titenq.github.io/circle-progress-stats/',
    src: circleProgress,
    alt: 'Circle Progress Stats',
    caption: 'Estatísticas com progresso em gráfico circular extraídos automaticamente de um objeto.'
  }
];

const Portfolio = () => {
  return (
    <>
      <div className={styles.section_container}>
        <h1>Portfólio</h1>
      </div>
      <section>
        {links.map((link, index) => {
          return (
            <div key={index} className={styles.card}>
              <a href={link.href} target='_blank' rel='noopener noreferrer'>
                <figure className={styles.box}>
                  <div className={styles.img_box}>
                    <img src={link.src} alt={link.alt} />
                  </div>
                  <figcaption className={styles.content_box}>
                    <div>
                      <h2>{link.alt}</h2>
                      <p>{link.caption}</p>
                    </div>
                  </figcaption>
                </figure>
              </a>
            </div>
          )
        })}
      </section>
    </>
  );
};

export default Portfolio;
