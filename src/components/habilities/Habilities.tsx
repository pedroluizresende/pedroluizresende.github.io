import { FaJava, FaReact, FaHtml5, FaCss3Alt, FaAndroid } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiTypescript } from 'react-icons/si';
import { DiMysql } from 'react-icons/di';
import styles from './Habilities.module.css';

function Habilities() {
  const habilities = [
    {
      name: 'Java',
      icon: <FaJava />,
    },
    {
      name: 'React',
      icon: <FaReact />,
    },
    {
      name: 'HTML',
      icon: <FaHtml5 />,
    },
    {
      name: 'CSS',
      icon: <FaCss3Alt />,
    },
    {
      name: 'MySQL',
      icon: <DiMysql />,
    },
    {
      name: 'JavaScript',
      icon: <IoLogoJavascript />,
    },
    {
      name: 'TypeScript',
      icon: <SiTypescript />,
    },
    {
      name: 'Android',
      icon: <FaAndroid />,
    },
  ];

  return (
    <div className={ styles.habilities }>
      <h2>Habilidades</h2>

      <ul>
        { habilities.map((hability, index) => (
          <li key={ index }>
            { hability.icon }
            <p>
              { hability.name }
            </p>
          </li>
        )) }
      </ul>
    </div>
  );
}

export default Habilities;
