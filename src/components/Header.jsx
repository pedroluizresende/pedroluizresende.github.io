import React from 'react';
import { useTheme } from '@emotion/react';
import { useMediaQuery } from '@mui/material';
import { CustomAppBar, CustomLink,
  CustomToolbar, CustomTypography } from '../styles/Header';
import SandwichMenu from './SandwichMenu';
import LinkProjects from './LinkProjects';

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
        <LinkProjects />
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
