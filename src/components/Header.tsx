import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import styles from './Header.module.css';

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className={ styles.header }>
      <a href="/">Portfólio - Pedro Resende</a>
      <button type="button" onClick={ () => setShowMenu(true) }>
        <GiHamburgerMenu className={ styles.hamburger } />
      </button>
    </header>
  );
}

export default Header;
