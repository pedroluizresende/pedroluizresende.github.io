import { GoArrowDown } from 'react-icons/go';
import styles from './About.module.css';
import Habilities from '../habilities/Habilities';
import useScroll from '../../hooks/useScroll';
import Reveal from '../reveal/Reveal';

function About({ id, hRef }: { id: string,
  hRef: string }) {
  const { scrollToSection } = useScroll();

  return (
    <section id={ id } className={ `about ${styles.about} ` }>

      <div className={ styles.row1 } />
      <div className={ styles.row2 } />
      <div className={ styles.row3 } />
      <div className={ styles.row4 } />

      <Reveal>

        <h2>Quem sou eu </h2>
      </Reveal>
      <Reveal>

        <p>
          Olá! Sou um desenvolvedor web full stack apaixonado por tecnologia.
          Tenho experiência em Node.js,
          JavaScript/TypeScript, Java (backend) e React (frontend).
          Além disso, também trabalho com bancos de dados relacionais e não relacionais.
        </p>
      </Reveal>

      <Reveal>

        <p>
          Minha paixão por aprender me levou
          a explorar o desenvolvimento mobile para Android.
          Estou sempre em busca de novos desafios e oportunidades
          para expandir meu conhecimento e contribuir para projetos empolgantes.
          Vamos criar algo incrível juntos!

        </p>
      </Reveal>

      <Habilities />

      <Reveal delay={ 1 } duration={ 0.25 } type="up">
        <button
          className={ styles.link }
          aria-label="Ir para a seção de projetos"
          onClick={ () => scrollToSection(hRef) }
        >
          <GoArrowDown />
        </button>
      </Reveal>
    </section>
  );
}

export default About;
