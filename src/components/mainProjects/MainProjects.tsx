import { Link } from 'react-router-dom';
import useSWR from 'swr';
import { useEffect, useState } from 'react';
import styles from './MainProjects.module.css';
import MainCardProject from '../mainCardProjects/MainCardProject';
import Reveal from '../reveal/Reveal';
import IProject from '../../interfaces/IProject';
import fetcher from '../../utils/fetcher';

function MainProjects({ id }: { id: string }) {
  const {
    data,
    isLoading,
  } = useSWR(`${import.meta.env.VITE_API_URL}projects/main`, fetcher);

  const [projects, setProjects] = useState<IProject[] | null>(null);

  useEffect(() => {
    setProjects(data);
  }, [data]);

  if (isLoading) return <h1>Carregando...</h1>;

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

      {
        !data
          ? <h1>Nenhum projeto disponível</h1>
          : (
            <section
              className={ styles.projectsList }
            >
              <MainCardProject project={ data[0] as IProject } />

              <MainCardProject project={ data[1] } />
            </section>
          )
      }

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
