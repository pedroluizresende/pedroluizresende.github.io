import React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import Header from '../components/Header';
import { ContainerProjects } from '../styles/Projects';
import Footer from '../components/Footer';
import CardDev from '../components/CardDev';

function Projects() {
  const devs = ['Front-end', 'Back-end', 'Full stack'];

  return (
    <ContainerProjects>
      <Header />
      <Typography
        variant="h2"
        gutterBottom
        sx={ { marginTop: '5rem' } }
      >
        Projetos
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Aqui você encontrará uma lista dos projetos que
        desenvolvi durante o meu curso na Trybe
        e também projetos pessoais e profissionais!
      </Typography>
      <Box sx={ { display: 'flex' } }>
        {
          devs.map((dev) => (
            <CardDev key={ dev } dev={ dev } />
          ))
        }
      </Box>
      <Footer />
    </ContainerProjects>
  );
}

export default Projects;
