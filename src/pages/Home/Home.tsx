import { GoArrowDown } from 'react-icons/go';
import styles from './Home.module.css';
import About from '../../components/about/About';
import Habilities from '../../components/habilities/Habilities';

function Home() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className={ styles.container }>

      <section className={ styles.welcome }>

        <div className={ styles.row } />
        <div className={ styles.row2 } />
        <div />

        <h1>
          Olá,
          sou Pedro!
        </h1>
        <h2>
          desenvolvedor web
        </h2>
        <p>
          este é o meu espaço,
          repleto de criações e projetos para você explorar.
          Sinta-se em casa!
        </p>
        <button
          type="button"
          aria-label="Ir para projetos"
          className={ styles.arrowBtn }
          onClick={ () => scrollToSection('sobre') }
        >
          <GoArrowDown />
        </button>
      </section>
      <About id="sobre" hRef="#projetos" />
    </main>
  );
}

export default Home;
