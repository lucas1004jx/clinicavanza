import { Typography } from '@mui/material';
import Link from 'next/link';
import { FC } from 'react';
import {
  StyledAppBar,
  StyledImage,
} from './TopBar.styled';

export const TopBar: FC = () => (
  <StyledAppBar>
    <Link href="/">
      <StyledImage src="/logo.png" alt="logo" />
    </Link>

    <Typography>ES HORA DE CAMBIAR</Typography>
  </StyledAppBar>
);
