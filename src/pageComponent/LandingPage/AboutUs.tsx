import { Typography } from '@mui/material';
import { FC } from 'react';
import { StyledImg, StyledSection } from './LandingPage.styled';

export const AboutUs:FC = () => (
  <StyledSection>
    <Typography variant="h5" fontWeight="light" align="center">BIENVENIDO A</Typography>
    <Typography variant="h5" fontWeight="bold" align="center" gutterBottom>CLINICA AVANZA</Typography>
    <StyledImg src="/aboutUs.png" alt="about us" />
    <Typography>
      Somos...Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum...(Quien somos)
    </Typography>
  </StyledSection>
);
