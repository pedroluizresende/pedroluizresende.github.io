import styled from '@emotion/styled';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const CustomAppBar = styled(AppBar)`
    box-shadow: 0 0 0;
`;

export const CustomTypography = styled(Typography)`
    font-weight: 400;
    margin: 0 2rem
`;

export const CustomToolbar = styled(Toolbar)`
  display: flex;
  justify-content: flex-end;
  width: 90%;
  margin: auto;
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
  color: #ecf0f1;
  transition: 0.5s;
  :hover {
    color:#f1c40f;
  }
`;
