import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './MainCardProject.module.css';
import IProjects from '../../interfaces/IProject';
import Reveal from '../reveal/Reveal';

function MainCardProject({ project }: { project: IProjects }) {
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      setShowMore(true);
    }
  };

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
          <img src={ project.image } alt={ project.title } />
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
                project.tags.map((tag, index) => (
                  <li className={ styles.tag } key={ tag.name }>{ tag.name }</li>
                ))
                }
            </ul>
            <Link to={ `/project/${project.id}` }>Ver mais</Link>
          </div>
        )
      }

    </div>
  );
}

export default MainCardProject;
