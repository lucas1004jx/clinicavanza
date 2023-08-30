import { Typography } from '@mui/material';
import { FC } from 'react';
import {
  StyledMap, StyledMediaWrapper, StyledSection, StyledSectionTextWrapper, StyledTitle,
} from './LandingPage.styled';

export const Location:FC = () => (
  <StyledSection>
    <StyledTitle gutterBottom>ESTAMOS EN</StyledTitle>
    <StyledMediaWrapper>
      <StyledMap
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2983.0156260072363!2d-4.689091984472416!3d41.61217377924419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd471309de79896f%3A0xfa2fce5c1a926f3e!2sC.%20San%20Crist%C3%B3bal%2C%205%2C%2047193%20Cist%C3%A9rniga%2C%20Valladolid!5e0!3m2!1sen!2ses!4v1662225384380!5m2!1sen!2ses"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </StyledMediaWrapper>
    <StyledSectionTextWrapper>
      <Typography>
        Calle San Cristóbal, 5
        <br />
        La Cisterniga
        <br />
        Valladolid
      </Typography>
    </StyledSectionTextWrapper>
  </StyledSection>
);
