import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { Container } from '@mui/system';

export const CustomContainer = styled(Container)`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content:center;
  flex-direction: column;
`;

export const CustomBox = styled(Box)`
  position: relative;
  display: flex;
  text-align: center; 
  max-width: 35rem;
  justify-content: center;
  align-items: center;
  h3 {
    margin: 0;
  }
  h1 {
    margin: 0;
  }

  &::before {
    content: "";
    position: absolute;
    top: -1px;
    left: -1px;
    border-top: 0 solid ${({ theme }) => theme.palette.secondary.main};
    border-left: 0 solid ${({ theme }) => theme.palette.secondary.main};
    width: 0;
    transition: all 2s ease;
    border-radius: 4px 0 0;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -1px;
    right: -1px;

    width: 0;
    transition: all 1s ease;
    border-radius: 0 0 4px;
  }

  &:hover::before {
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.palette.secondary.main};
    border-right: 1px solid ${({ theme }) => theme.palette.secondary.main};
  }

  &:hover::after {
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.palette.secondary.main};
    border-right: 1px solid ${({ theme }) => theme.palette.secondary.main};
  }
`;

export const HomeContainer = styled('main')`
  height: 100vh;
`;
