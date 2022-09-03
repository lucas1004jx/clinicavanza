import { Typography } from '@mui/material';
import { FC } from 'react';
import {
  StyledImg, StyledMediaWrapper, StyledSection, StyledTitle,
} from './LandingPage.styled';

export const Service:FC = () => (
  <>
    <StyledSection>
      <StyledTitle fontWeight="lighter">TE AYUDAMOS A </StyledTitle>
      <StyledTitle gutterBottom>PERDER PESO</StyledTitle>
      <StyledMediaWrapper>
        <StyledImg src="/dieta.png" alt="perder peso" />
      </StyledMediaWrapper>

      <Typography>
        Dieta...Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum...
      </Typography>
    </StyledSection>
    <StyledSection>
      <StyledTitle gutterBottom>ENTRENAR MEJOR</StyledTitle>
      <StyledMediaWrapper>
        <StyledImg src="/entreno.png" alt="entrenamiento" />
      </StyledMediaWrapper>

      <Typography>
        Entrenamiento...Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum...
      </Typography>
    </StyledSection>
    <StyledSection>
      <StyledTitle gutterBottom>RECUPERAR DE LESIONES</StyledTitle>
      <StyledMediaWrapper>
        <StyledImg src="/fisio.png" alt="recupera de lesiones" />
      </StyledMediaWrapper>

      <Typography>
        Fisio...Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum...
      </Typography>
    </StyledSection>
  </>
);
