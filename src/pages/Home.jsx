import { Button, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import { CustomBox, CustomContainer, HomeContainer } from '../styles/Home';
import Footer from '../components/Footer';

function Home() {
  const history = useHistory();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <HomeContainer>
      <Header />
      <CustomContainer
        maxWidth={ false }
        sx={ { marginTop: isSmallScreen ? '7.5rem' : '10rem' } }
      >
        <CustomBox
          sx={ { height: isSmallScreen ? '9rem' : '20rem' } }
        >
          <Typography variant={ isSmallScreen ? 'h3' : 'h1' } gutterBottom>
            PEDRO RESENDE
          </Typography>

        </CustomBox>
        <Typography
          color="#f1c40f"
          variant={ isSmallScreen ? 'h7' : 'h5' }
          gutterBottom
          sx={ { marginTop: '5rem' } }
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
      </CustomContainer>
      <Footer />
    </HomeContainer>
  );
}

export default Home;
