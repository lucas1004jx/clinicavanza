/* eslint-disable jsx-a11y/anchor-is-valid */
import { Typography } from '@mui/material';
import Link from 'next/link';
import { FC } from 'react';
import {
  StyledAppBar,
  StyledImage,
} from './TopBar.styled';

export const TopBar: FC = () => (
  <StyledAppBar>
    {/* <Link href="/">
      <StyledImage src="/images/logo-1.png" alt="logo" />
    </Link> */}
    <Link href="/">
      <a>
        <Typography>ES HORA DE CAMBIAR</Typography>
      </a>
    </Link>
  </StyledAppBar>
);
