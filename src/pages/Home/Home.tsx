import { GoArrowDown } from 'react-icons/go';
// import { useRef } from 'react'
import styles from './Home.module.css';
import About from '../../components/about/About';
import MainProjects from '../../components/mainProjects/MainProjects';
import useScroll from '../../hooks/useScroll';
import Reveal from '../../components/reveal/Reveal';

function Home() {
  const { scrollToSection } = useScroll();

  return (
    <main
      className={ styles.container }
    >

      <section className={ `${styles.welcome}` } id="first-section">

        <div className={ styles.row } />
        <div className={ styles.row2 } />
        <div className={ styles.row3 } />
        <div className={ styles.row4 } />
        <Reveal>
          <h1>
            Olá,
            sou Pedro!
          </h1>
        </Reveal>
        <Reveal>
          <h2>
            desenvolvedor web
          </h2>
        </Reveal>

        <Reveal>
          <p
            className={ styles.teste }
          >
            este é o meu espaço,
            repleto de criações e projetos para você explorar.
            Sinta-se em casa!
          </p>
        </Reveal>

        <Reveal delay={ 1 } duration={ 0.25 } type="up">
          <button
            type="button"
            aria-label="Ir para a seção sobre"
            className={ `${styles.arrowBtn}` }
            onClick={ () => scrollToSection('sobre') }
          >
            <GoArrowDown />
          </button>
        </Reveal>
      </section>
      <About id="sobre" hRef="projetos" />

      <MainProjects id="projetos" />

    </main>
  );
}

export default Home;
