import { Button, Typography } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import { CustomBox, CustomContainer } from '../styles/Home';

function Home() {
  const history = useHistory();
  return (
    <>
      <Header />
      <CustomContainer maxWidth={ false }>
        <CustomBox>
          <Typography variant="h1" gutterBottom>
            PEDRO RESENDE
          </Typography>
          <Typography
            color="#f1c40f"
            variant="h5"
            gutterBottom
          >
            Desenvolvedor Web FullStack
          </Typography>

          <Button
            sx={ { marginTop: '1rem', width: '9rem' } }
            color="tertiary"
            variant="outlined"
            onClick={ () => history.push('/about') }
          >
            SAIBA MAIS

          </Button>
        </CustomBox>

      </CustomContainer>
    </>
  );
}

export default Home;
