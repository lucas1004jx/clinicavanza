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
          Problemas gastrointestinales tales como gases, reflujo , inflamación intestinal, estreñimiento, resistencia a la insulina, amenorrea ,disbiosis, intolerancias...
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
          35€ / sesión .Tratamiento de lesiones musculo-esqueléticas, viscerales, deportivas con multitud de técnicas encaminadas a la disminución del dolor y recuperación del paciente.
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
          ASESORAMIENTO DEPORTIVO
        </Typography>
      </StyledSectionTextWrapper>

    </StyledSection>

  </>
);
