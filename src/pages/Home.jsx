import { Button, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import Header from '../components/Header';
import { CustomBox, CustomContainer, HomeContainer } from '../styles/Home';
import Footer from '../components/Footer';
import 'animate.css';
import About from './About';

function Home() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleScrollToAbout = () => {
    const element = document.getElementById('about');

    element.scrollIntoView();
  };

  return (
    <>
      <HomeContainer>
        <Header />
        <CustomContainer
          maxWidth={ false }
          sx={ { marginTop: isSmallScreen ? '7.5rem' : '10rem' } }
        >
          <CustomBox
            sx={ { height: isSmallScreen ? '9rem' : '20rem' } }
          >
            <Typography
              className="animate__animated animate__fadeInLeft"
              variant={ isSmallScreen ? 'h3' : 'h1' }
              gutterBottom
              id="home"
            >
              PEDRO
            </Typography>
            <Typography
              className="animate__animated animate__fadeInRight"
              variant={ isSmallScreen ? 'h3' : 'h1' }
              gutterBottom
            >
              RESENDE
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
            onClick={ handleScrollToAbout }
          >
            SAIBA MAIS
          </Button>
        </CustomContainer>

      </HomeContainer>
      <About />
      <Footer />
    </>
  );
}

export default Home;
