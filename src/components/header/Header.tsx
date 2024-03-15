import { useLocation, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';
import Reveal from '../reveal/Reveal';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const currentPath = location.pathname;

  return (
    <header className={ styles.header }>
      <Reveal type="left" width="100%">
        <h1
          id="top"
        >
          Pedro.Resende
        </h1>
      </Reveal>

      <nav>
        <Reveal type="right">
          <button
            onClick={ () => navigate('/') }
            disabled={ currentPath === '/' }
          >
            {
            currentPath === '/'
            && <span className={ styles.visuallyHidden }>Você já esta na home</span>
          }
            Home
          </button>
        </Reveal>

        <Reveal type="right">
          <button
            onClick={ () => navigate('/projetos') }
            disabled={ currentPath === '/projetos' }
          >
            {
            currentPath === '/projetos'
            && (
              <span
                className={ styles.visuallyHidden }
              >
                Você já esta na página de projetos
              </span>
            )
          }
            Projetos
          </button>
        </Reveal>

        <Reveal type="right">
          <button
            onClick={ () => navigate('/contato') }
            disabled={ currentPath === '/contato' }
          >
            {
            currentPath === '/contato'
            && (
              <span
                className={ styles.visuallyHidden }
              >
                Você já esta na página contato
              </span>
            )
          }
            Contato
          </button>
        </Reveal>
      </nav>
    </header>
  );
}

export default Header;
