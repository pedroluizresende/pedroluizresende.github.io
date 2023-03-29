import React from 'react';
import { CustomAppBar, CustomLink,
  CustomToolbar, CustomTypography } from '../styles/Header';

function Header() {
  return (
    <CustomAppBar position="static">
      <CustomToolbar variant="regular">
        <CustomTypography variant="h6" component="div">

          <CustomLink to="/">Home</CustomLink>
        </CustomTypography>
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
