import { GoArrowDown } from 'react-icons/go';
import styles from './About.module.css';
import Habilities from '../habilities/Habilities';

function About({ id, hRef }: { id: string, hRef: string }) {
  return (
    <section id={ id } className={ styles.about }>

      <div className={ styles.row1 } />

      <div className={ styles.row2 } />

      <div className={ styles.row3 } />

      <div className={ styles.row4 } />

      <h2>Quem sou eu </h2>

      <p>
        Olá! Sou um desenvolvedor web full stack apaixonado por tecnologia.
        Tenho experiência em Node.js,
        JavaScript/TypeScript, Java (backend) e React (frontend).
        Além disso, também trabalho com bancos de dados relacionais e não relacionais.
      </p>

      <p>
        Minha paixão por aprender me levou
        a explorar o desenvolvimento mobile para Android.
        Estou sempre em busca de novos desafios e oportunidades
        para expandir meu conhecimento e contribuir para projetos empolgantes.
        Vamos criar algo incrível juntos!

      </p>

      <Habilities />

      <a
        href={ hRef }
        className={ styles.link }
        aria-label="Ir para a seção de projetos"
      >
        <GoArrowDown />
      </a>
    </section>
  );
}

export default About;
