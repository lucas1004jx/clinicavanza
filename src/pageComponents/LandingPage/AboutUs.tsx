import { Typography } from '@mui/material';
import { FC } from 'react';
import {
  StyledImg, StyledMediaWrapper, StyledSection, StyledTitle,
} from './LandingPage.styled';

export const AboutUs:FC = () => (
  <StyledSection elevation={0}>
    <Typography align="center">
      Somos un centro de fisioterapia avanzada y nutrición , situado en La Cisterniga, Valladolid.
    </Typography>
  </StyledSection>
);
