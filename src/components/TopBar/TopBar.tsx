import { Typography } from '@mui/material';
import { FC } from 'react';
import {
  StyledAppBar,
  StyledImage,
} from './TopBar.styled';

export const TopBar: FC = () => (
  <StyledAppBar>
    <StyledImage src="/logo.png" alt="logo" />
    <Typography>ES HORA DE CAMBIAR</Typography>
  </StyledAppBar>
);
