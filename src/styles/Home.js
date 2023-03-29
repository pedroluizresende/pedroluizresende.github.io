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
  height: 25rem;
  align-items: center;
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    border-top: 1px solid ${({ theme }) => theme.palette.secondary.main};
    border-left: 1px solid ${({ theme }) => theme.palette.secondary.main};
    width: 7rem;
    height: 7rem;
    transform: translate(-50%, -50%);
  }
  
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    border-bottom: 1px solid ${({ theme }) => theme.palette.secondary.main};
    border-right: 1px solid ${({ theme }) => theme.palette.secondary.main};
    width: 7rem;
    height: 7rem;
    transform: translate(50%, 50%) ;
  }
`;
