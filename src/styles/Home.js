import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { Container } from '@mui/system';

export const CustomContainer = styled(Container)`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content:center;
`;

export const CustomBox = styled(Box)`
  position: relative;
  display: flex;
  text-align: center; 
  max-width: 35rem;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    top: -1px;
    left: -1px;
    border-top: 1px solid ${({ theme }) => theme.palette.secondary.main};
    border-left: 1px solid ${({ theme }) => theme.palette.secondary.main};
    width: 10%;
    height: 10%;
    transition: all 1s ease;
    border-radius: 4px 0 0;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -1px;
    right: -1px;
    border-bottom: 1px solid ${({ theme }) => theme.palette.secondary.main};
    border-right: 1px solid ${({ theme }) => theme.palette.secondary.main};
    width: 10%;
    height: 10%;
    transition: all 1s ease;
    border-radius: 0 0 4px;
  }

  &:hover::before {
    width: calc(30% + 1px);
    height: calc(30% + 1px);
  }

  &:hover::after {
    width: calc(30% + 1px);
    height: calc(30% + 1px);
  }
`;

export const HomeContainer = styled('main')`
  height: 100vh;
`;
