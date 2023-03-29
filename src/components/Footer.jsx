import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useTheme } from '@emotion/react';
import { useMediaQuery } from '@mui/material';
import { CustomAppbar, CustomToolbar } from '../styles/Footer';

function Footer() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <CustomAppbar
      position="fixed"
      color="primary"
      style={ { marginTop: isSmallScreen ? '1.5rem' : '3rem' } }
    >
      <CustomToolbar>
        <a href="https://www.linkedin.com/in/pedro-luiz-resende/" target="_blank" rel="noreferrer">
          <LinkedInIcon
            fontSize="large"
            color="secondary"
            sx={ { transition: '0.5s', ':hover': { color: '#f1c40f' } } }
          />
        </a>
        <a href="https://www.linkedin.com/in/pedro-luiz-resende/" target="_blank" rel="noreferrer">
          <GitHubIcon
            fontSize="large"
            color="secondary"
            sx={ { transition: '0.5s', ':hover': { color: '#f1c40f' } } }
          />
        </a>
      </CustomToolbar>
    </CustomAppbar>
  );
}

export default Footer;
