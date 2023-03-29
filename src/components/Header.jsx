import React from 'react';
import { useTheme } from '@emotion/react';
import { useMediaQuery } from '@mui/material';
import { CustomAppBar, CustomLink,
  CustomToolbar, CustomTypography } from '../styles/Header';
import SandwichMenu from './SandwichMenu';

function Header() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <CustomAppBar position="static">

      { isSmallScreen && <SandwichMenu />}
      <CustomToolbar
        variant="regular"
        sx={ { display: isSmallScreen ? 'none' : 'flex' } }
      >
        <CustomLink to="/">
          <CustomTypography variant="h6" component="div">
            Home
          </CustomTypography>
        </CustomLink>
        <CustomLink to="/projects">
          <CustomTypography variant="h6" component="div">
            Projetos
          </CustomTypography>
        </CustomLink>
        <CustomLink to="/about">
          <CustomTypography variant="h6" component="div">
            Sobre
          </CustomTypography>
        </CustomLink>
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
