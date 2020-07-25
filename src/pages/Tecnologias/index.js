import React, { useState } from 'react';

import styles from './Tecnologias.module.css';
import monitor from '../../assets/img/monitor.jpeg';
import html from '../../assets/img/html-css-javascript.png';
import react from '../../assets/img/react-angular-typescript.png';
import node from '../../assets/img/node-express-next.png';
import mongodb from '../../assets/img/mongodb-mysql.png';

const imgs = [
  {
    src: html,
    alt: 'HTML, CSS, JavaScript'
  },
  {
    src: react,
    alt: 'React, Angular, TypeScript'
  },
  {
    src: node,
    alt: 'NodeJS, Express, NextJS, REST API, GraphQL'
  },
  {
    src: mongodb,
    alt: 'MongoDB, MySQL, PostgreSQL, Firebase'
  }
];

const Tecnologias = () => {
  const [src, setSrc] = useState(html);

  const changeThumb = src => {
    setSrc(src);
  };

  return (
    <section>
      <div className={styles.section_container}>
        <h1>Tecnologias</h1>
        <div className={styles.tecnologias_container}>
          <figure className={styles.monitor_container}>
            <img className={styles.monitor} src={monitor} alt="Monitor" />
            <img className={styles.monitor_content} src={src} alt="HTML, CSS, JavaScript" />
          </figure>
          <figure className={styles.thumbs}>
            {imgs.map((img, index) => {
              return (
                <img key={index} src={img.src} alt={img.alt} onClick={() => changeThumb(img.src)} />
              )
            })}
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Tecnologias;
