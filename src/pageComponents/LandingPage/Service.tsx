import { Typography } from '@mui/material';
import { FC } from 'react';
import { StyledImg, StyledSection, StyledTitle } from './LandingPage.styled';

export const Service:FC = () => (
  <>
    <StyledSection>
      <StyledTitle fontWeight="lighter">TE AYUDAMOS A </StyledTitle>
      <StyledTitle gutterBottom>PERDER PESO</StyledTitle>
      <StyledImg src="/dieta.png" alt="perder peso" />
      <Typography>
        Dieta...Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum...
      </Typography>
    </StyledSection>
    <StyledSection>
      <StyledTitle gutterBottom>ENTRENAR MEJOR</StyledTitle>
      <StyledImg src="/entreno.png" alt="entrenamiento" />
      <Typography>
        Entrenamiento...Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum...
      </Typography>
    </StyledSection>
    <StyledSection>
      <StyledTitle gutterBottom>RECUPERAR DE LESIONES</StyledTitle>
      <StyledImg src="/fisio.png" alt="recupera de lesiones" />
      <Typography>
        Fisio...Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum...
      </Typography>
    </StyledSection>
  </>
);
