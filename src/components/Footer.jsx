import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { CustomAppbar, CustomToolbar } from '../styles/Footer';

function Footer() {
  return (
    <CustomAppbar position="fixed" color="primary" sx={ { top: 'auto', bottom: 0 } }>
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
