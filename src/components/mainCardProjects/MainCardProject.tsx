import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { SiStyleshare } from 'react-icons/si';
import styles from './MainCardProject.module.css';
import IProjects from '../../data/IProjects';

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
        <img src={ project.images } alt={ project.title } />
        <div className={ styles.details }>
          {
            !showMore && <h3>{ project.title }</h3>
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
          <li className={ styles.tag } key={ tag }>{ tag }</li>
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
