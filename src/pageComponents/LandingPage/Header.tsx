import { FC } from 'react';
import { ContactButton } from 'components/ContactButton';
import { Stack } from '@mui/material';
import {
  StyledHeader,
  StyledHeaderText,
  StyledImg,
} from './LandingPage.styled';

export const Header: FC = () => (
  <StyledHeader alignItems="center" spacing={1}>
    <StyledImg src="/images/logo.png" alt="logo" />
    <Stack alignItems="center" spacing={1}>
      <StyledHeaderText align="center">
        Somos un centro de  nutrición , situado en La Cisterniga, Valladolid.
      </StyledHeaderText>
      <ContactButton />
    </Stack>
  </StyledHeader>
);
