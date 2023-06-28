import React from 'react';
import { useTheme } from '@emotion/react';
import { useMediaQuery } from '@mui/material';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { CustomA, CustomAppBar, CustomLink,
  CustomToolbar, CustomTypography } from '../styles/Header';
import SandwichMenu from './SandwichMenu';
import LinkProjects from './LinkProjects';

function Header() {
  const history = useHistory();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <CustomAppBar position="static">

      { isSmallScreen && <SandwichMenu />}
      <CustomToolbar
        variant="regular"
        sx={ { display: isSmallScreen ? 'none' : 'flex' } }
      >
        <CustomLink
          onClick={ () => history.push('/') }
        >
          <CustomTypography variant="h6" component="div">
            Home
          </CustomTypography>
        </CustomLink>
        <LinkProjects />
        <CustomA href="#about">
          <CustomTypography variant="h6" component="div">
            Sobre
          </CustomTypography>
        </CustomA>
        <CustomLink to="/contact">
          <CustomTypography variant="h6" component="div">
            Contato
          </CustomTypography>
        </CustomLink>
      </CustomToolbar>
    </CustomAppBar>
  );
}

export default Header;
