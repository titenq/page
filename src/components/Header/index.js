import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';
import avatar from '../../assets/img/avatar.jpeg'

const links = [
  {
    name: 'Home',
    to: '/'
  },
  {
    name: 'Tecnologias',
    to: '/tecnologias'
  },
  {
    name: 'Portfólio',
    to: '/portfolio'
  },
  {
    name: 'Contatos',
    to: '/contatos'
  }
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);

  };

  return (
    <header className={styles.navbar}>
      <div className={styles.avatar}>
        <img src={avatar} alt="TitenQ avatar" />
      </div>
      <ul className={`${styles.links} ${isOpen ? styles.links_on : ''}`}>
        {links.map((link, index) => {
          return (
            <li key={index} className={styles.color_animate}>
              <NavLink to={link.to} exact onClick={toggleOpen}>{link.name}</NavLink>
            </li>
          );
        })}
      </ul>
      <div className={`${styles.hamburger} ${isOpen ? styles.open : ''}`} onClick={toggleOpen}>
        <div className={styles.btn_hamburger}></div>
      </div>
    </header>
  );
};

export default Header;
