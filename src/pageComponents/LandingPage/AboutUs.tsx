import { Typography } from '@mui/material';
import { FC } from 'react';
import {
  StyledImg, StyledMediaWrapper, StyledSection, StyledTitle,
} from './LandingPage.styled';

export const AboutUs:FC = () => (
  <StyledSection>
    <StyledTitle fontWeight="lighter">BIENVENIDO A</StyledTitle>
    <StyledTitle gutterBottom>CLINICA AVANZA</StyledTitle>
    <StyledMediaWrapper>
      <StyledImg src="/images/aboutUs.png" alt="about us" />
    </StyledMediaWrapper>

    <Typography>
      Somos...Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum...(Quien somos)
    </Typography>
  </StyledSection>
);
