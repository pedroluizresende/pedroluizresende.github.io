import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { Container } from '@mui/system';

export const CustomContainer = styled(Container)`
  width: 90%;
  margin-top:10rem;
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
  height: 30rem;
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
