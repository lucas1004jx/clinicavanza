import { FC } from 'react';
import { ContactButton } from 'components/ContactButton';
import { Typography } from '@mui/material';
import {
  StyledHeader,
  StyledContactButton,
  StyledImg,
} from './LandingPage.styled';

export const Header: FC = () => (
  <StyledHeader alignItems="center" spacing={1.5}>
    <StyledImg src="/images/logo.png" alt="perder peso" />
    <Typography align="center">
      Somos un centro de fisioterapia avanzada y nutrición , situado en La Cisterniga, Valladolid.
    </Typography>
    <ContactButton />
  </StyledHeader>
);
