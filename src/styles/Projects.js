import styled from '@emotion/styled';
import { Card } from '@mui/material';

export const ContainerProjects = styled('main')`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CustomCard = styled(Card)`
  background-color: ${({ theme }) => theme.palette.secondary.main}
`;
