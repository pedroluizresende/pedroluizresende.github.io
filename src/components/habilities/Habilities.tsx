import { FaJava, FaReact, FaHtml5, FaCss3Alt, FaAndroid } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiTypescript } from 'react-icons/si';
import { DiMysql } from 'react-icons/di';
import styles from './Habilities.module.css';
import Reveal from '../reveal/Reveal';

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
      <Reveal>
        <h2>Habilidades</h2>
      </Reveal>

      <ul>
        { habilities.map((hability, index) => (
          <li key={ index }>
            <Reveal type="left">
              { hability.icon }
            </Reveal>
            <Reveal>
              <p>
                { hability.name }
              </p>
            </Reveal>
          </li>
        )) }
      </ul>
    </div>
  );
}

export default Habilities;
