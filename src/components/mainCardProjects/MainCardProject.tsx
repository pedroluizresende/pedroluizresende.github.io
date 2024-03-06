import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './MainCardProject.module.css';
import IProjects from '../../data/IProjects';
import Reveal from '../reveal/Reveal';

function MainCardProject({ project }: { project: IProjects }) {
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      setShowMore(true);
    }
  };

  useEffect(() => {
  });

  return (
    <div
      className={ styles.mainCardProject }
      onMouseEnter={ () => setShowMore(true) }
      onMouseLeave={ () => setShowMore(false) }
      onClick={ () => navigate(`/project/${project.id}`) }
      onKeyDown={ handleKeyDown }
      role="button"
      tabIndex={ 0 }
    >
      <div
        className={ styles.banner }
      >
        <Reveal
          type="left"
          width="100%"
          className={ styles.imgReveal }
        >
          <img src={ project.images } alt={ project.title } />
        </Reveal>
        <div className={ styles.details }>

          {
            !showMore
            && (
              <Reveal type="left"><h3>{ project.title }</h3></Reveal>
            )
          }

        </div>
      </div>

      {
        showMore
        && (

          <div className={ styles.description }>
            <ul>
              {
                project.tags.map((tag) => (
                  <Reveal key={ tag }>
                    <li className={ styles.tag } key={ tag }>{ tag }</li>
                  </Reveal>
                ))
                }
            </ul>
            <Reveal>
              <Link to={ `/project/${project.id}` }>Ver mais</Link>
            </Reveal>
          </div>
        )
      }

    </div>
  );
}

export default MainCardProject;
