import { Typography } from '@mui/material';
import { FC } from 'react';
import {
  StyledImg, StyledMediaWrapper, StyledSection, StyledSectionTextWrapper, StyledTitle,
} from './LandingPage.styled';

export const Service:FC = () => (
  <>
    <StyledTitle fontWeight="lighter">NUESTROS SERVICIOS </StyledTitle>
    <StyledSection>

      <StyledTitle gutterBottom>NUTRICIÓN</StyledTitle>
      <StyledMediaWrapper>
        <StyledImg src="/images/dieta.png" alt="perder peso" />
      </StyledMediaWrapper>
      <StyledSectionTextWrapper>
        <Typography>
        Dieta...Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum...
        </Typography>
      </StyledSectionTextWrapper>
      
    </StyledSection>

    <StyledSection>
      <StyledTitle gutterBottom>FISIOTERAPIA</StyledTitle>
      <StyledMediaWrapper>
        <StyledImg src="/images/fisio.png" alt="recupera de lesiones" />
      </StyledMediaWrapper>
 <StyledSectionTextWrapper>
 <Typography>
        Fisio...Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum...
      </Typography>
</StyledSectionTextWrapper>
     
    </StyledSection>

    <StyledSection>
      <StyledTitle gutterBottom>ASESORAMIENTO DEPORTIVO</StyledTitle>
      <StyledMediaWrapper>
        <StyledImg src="/images/entreno.png" alt="entrenamiento" />
      </StyledMediaWrapper>
<StyledSectionTextWrapper>
<Typography>
        Entrenamiento...Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum...
      </Typography>
</StyledSectionTextWrapper>
      
    </StyledSection>

  </>
);
