import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import styles from './MainProjects.module.css';
import MainCardProject from '../mainCardProjects/MainCardProject';
import Reveal from '../reveal/Reveal';
import useFetch from '../../hooks/useFetch';
import IProject from '../../interfaces/IProject';
import fetcher from '../../utils/fetcher';

function MainProjects({ id }: { id: string }) {
  const [mainProjects, setMainProjects] = useState<IProject[]>([]);
  const {
    data,
    error,
    isLoading,
  } = useSWR(`${import.meta.env.VITE_API_URL}projects`, fetcher);
  useEffect(() => {
    console.log(data);
    console.log(isLoading);
    console.log(error);
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
        data.length < 1
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
