import styled from '@emotion/styled';
import { List, ListItem, MenuList, Paper } from '@mui/material';
import { Container } from '@mui/system';
import { Link } from 'react-router-dom';

export const CustomContainerMenu = styled(Container)`
  display: flex;
  justify-content: flex-end;
  `;

export const CustomMenuList = styled(MenuList)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
  color: #2c3e50;
  transition: 0.5s;
  :hover {
    color:#f1c40f;
  }
`;

export const CustomPaperMenu = styled(Paper)`
  position: fixed;
  right: 14px;
  top: 3rem;
  color: ${({ theme }) => theme.palette.primary.main};
  background-color: ${({ theme }) => theme.palette.secondary.main};
  display:flex;
  width: 50%;
  justify-content: flex-end;
  border-radius: 2px;
  height: calc(100vh - 6.5rem);
  z-index:100;
  opacity: 0.95;
`;

export const CustomList = styled(List)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  justify-items: flex-end;
`;

export const CustomListItem = styled(ListItem)`
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
`;
