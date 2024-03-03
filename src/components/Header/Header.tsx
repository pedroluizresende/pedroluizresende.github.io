import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={ styles.header }>
      <h1>Pedro.Resende</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/project">Projetos</Link>
        <Link to="/contact">contato</Link>
      </nav>
    </header>
  );
}

export default Header;
