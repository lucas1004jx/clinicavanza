import { Typography } from '@mui/material';
import { FC } from 'react';
import { StyledMap, StyledSection, StyledTitle } from './LandingPage.styled';

export const Location:FC = () => (
  <StyledSection>
    <StyledTitle gutterBottom>ESTAMOS EN</StyledTitle>
    <StyledMap
      title="map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2983.002513791025!2d-4.690951029671021!3d41.61245732338565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd471309d8201bc9%3A0xcb87b335908b0300!2sAv.%20Real%2C%205%2C%2047193%20Cist%C3%A9rniga%2C%20Valladolid!5e0!3m2!1ses!2ses!4v1659477819941!5m2!1ses!2ses"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
    <Typography>
      Calle xxxx xxx xx, 1
      <br />
      La Cisterniga
      <br />
      Valldadoid
    </Typography>
  </StyledSection>
);
