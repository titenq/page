import React, { useState } from 'react';

import styles from './Tecnologias.module.css';

const imgs = [
  {
    src: '/img/html-css-javascript.png',
    alt: 'HTML, CSS, JavaScript'
  },
  {
    src: '/img/react-angular-typescript.png',
    alt: 'React, Angular, TypeScript'
  },
  {
    src: '/img/node-express-next.png',
    alt: 'NodeJS, Express, NextJS, REST API, GraphQL'
  },
  {
    src: '/img/mongodb-mysql.png',
    alt: 'MongoDB, MySQL, PostgreSQL, Firebase'
  }
];

const Tecnologias = () => {
  const [src, setSrc] = useState('/img/html-css-javascript.png');

  const changeThumb = src => {
    setSrc(src);
  };

  return (
    <section>
      <div className={styles.section_container}>
        <h1>Tecnologias</h1>
        <div className={styles.tecnologias_container}>
          <figure className={styles.monitor_container}>
            <img className={styles.monitor} src="/img/monitor.jpeg" alt="Monitor" />
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
