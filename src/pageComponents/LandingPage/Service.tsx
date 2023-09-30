import { Stack, Typography } from '@mui/material';
import { Card } from 'components/Card/Card';
import { FC } from 'react';
import { StyledTitle } from './LandingPage.styled';
import { NutritionPricing } from './nutritionPricing';
import { ServiceCard } from './ServiceCard';
import { TrainingPricing } from './trainingPricing';

export const Service:FC = () => (
  <>
    <StyledTitle fontWeight="lighter" gutterBottom>NUESTROS SERVICIOS </StyledTitle>
    <Stack spacing={4}>
      <ServiceCard
        title="NUTRICION CLINICA EN PATOLOGIA DIGESTIVA (PNI)"
        imgUrl="/images/patologia-disgestiva.jpg"
        alt="nutricion"
        description="Problemas gastrointestinales tales como gases, reflujo , inflamación intestinal, estreñimiento, resistencia a la insulina, amenorrea ,disbiosis, intolerancias..."
        actionText="Ver Tarifa"
        dialogTitle="NUTRICION CLINICA EN PATOLOGIA DIGESTIVA (PNI)"
        dialogContent={<NutritionPricing />}
      />

      {/* <ServiceCard
        title="FISIOTERAPIA"
        imgUrl="/images/fisio.png"
        alt="recupera de lesiones"
        actionText="Ver Tarifa"
        description="Tratamiento de lesiones musculo-esqueléticas, viscerales, deportivas con multitud de técnicas encaminadas a la disminución del dolor y recuperación del paciente."
        dialogTitle="Fioterapia"
        dialogText="35€ / sesión"
      /> */}

      <ServiceCard
        title="ASESORAMIENTO DEPORTIVA"
        imgUrl="/images/entreno.png"
        alt="entrenamiento"
        actionText="Ver Tarifa"
        description="ASESORAMIENTO DEPORTIVA"
        dialogTitle="Asesoramiento deportiva"
        dialogContent={<TrainingPricing />}
      />
    </Stack>
  </>
);
