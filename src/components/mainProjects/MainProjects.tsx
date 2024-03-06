import { Link } from 'react-router-dom';
import styles from './MainProjects.module.css';
import { projects } from '../../data/projects';
import MainCardProject from '../mainCardProjects/MainCardProject';
import Reveal from '../reveal/Reveal';

function MainProjects({ id }: { id: string }) {
  return (
    <section
      className={ styles.mainProjects }
      id={ id }
    >

      <div className={ styles.row1 } />
      <div className={ styles.row2 } />
      <div className={ styles.row3 } />
      <div className={ styles.row4 } />
      <Reveal>
        <h2>
          Principais Projetos
        </h2>
      </Reveal>

      <section className={ styles.projectsList }>
        <MainCardProject project={ projects[0] } />
        <MainCardProject project={ projects[1] } />
      </section>

      <p className={ styles.moreProjects }>
        Para acessar mais projetos
        {' '}
        <Link
          to="/projetos"
        >
          clique aqui!
        </Link>
      </p>
    </section>
  );
}

export default MainProjects;
