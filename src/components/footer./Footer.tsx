import { FaLinkedin, FaGithub } from 'react-icons/fa';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer
      className={ styles.footer }
    >
      <nav>
        <a
          href="https://www.linkedin.com/in/pedro-luiz-resende/"
          target="_blank"
          aria-label="Linkedin"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/pedroluizresende"
          target="_blank"
          aria-label="Github"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

      </nav>
    </footer>
  );
}

export default Footer;
