import { FC } from 'react';
import { ContactButton } from 'components/ContactButton';
import { Stack, Typography } from '@mui/material';
import {
  StyledHeader,
  StyledImg,
} from './LandingPage.styled';

export const Header: FC = () => (
  <StyledHeader alignItems="center" spacing={-2}>
    <StyledImg src="/images/logo.png" alt="logo" />
    <Stack alignItems="center" spacing={1}>
      <Typography align="center">
        Somos un centro de  nutrición , situado en La Cisterniga, Valladolid.
      </Typography>
      <ContactButton />
    </Stack>
  </StyledHeader>
);
