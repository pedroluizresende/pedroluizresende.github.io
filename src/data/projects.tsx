import IProjects from '../interfaces/IProject';
import { logo } from './images/appReceitas';
import logoTrybeTunes from './images/trybeTunes/logo-trybeTunes.png';

export const projects: IProjects[] = [
  {
    id: 1,
    title: 'App de Receitas',
    description: `App de receitas, utilizando o que há de mais moderno
     dentro do ecossisstema React: Hooks e Context Api. Nele 
      é possivel: ver, buscar, filtrar favoritar e acompanhar
    o progresso de preparação de receitas de comidas e bebidas`,
    images: logo,
    link: 'https://pedroluizresende.github.io/recipes-app/',
    tags: ['React', 'Front-end', 'JavaScript'],
    repository: 'https://github.com/pedroluizresende/pedroluizresende.github.io',
    main: true,
  },

  {
    id: 2,
    title: 'Trybe Tunes',
    description: `
    Aplicação capaz de reproduzer músicas das mais variadas bandas e artistasm
    criar uma lista de músicas favoritas e editar o perfil da pessoa usuária
    Este projeto fez parte da minha formação de desenvolvedor
     web pela trybe, no módulo de front-end.`,

    images: logoTrybeTunes,
    link: 'https://pedroluizresende.github.io/trybe-tunes/',
    tags: ['React', 'Front-end', 'JavaScript'],
    repository: '',
    main: true,
  },
];
