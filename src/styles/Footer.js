import styled from '@emotion/styled';
import { Toolbar } from '@mui/material';

export const CustomAppbar = styled('footer')`
  display: flex;
  box-shadow: 0 0 0;
  justify-content: center; 
  position: relative;
  top: auto;
  bottom: 0;
  width: 100%;
  padding: 3rem;
`;

export const CustomToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  width: 10rem;
`;
