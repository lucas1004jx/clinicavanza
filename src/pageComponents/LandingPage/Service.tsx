import { Stack, Typography } from '@mui/material';
import { Card } from 'components/Card/Card';
import { FC } from 'react';
import { StyledTitle } from './LandingPage.styled';

import { ServiceCard } from './ServiceCard';
import { TrainingPricing } from './trainingPricing';
import { DigestivePathologyContent } from './DigestivePathologyContent';
import { HormonalPathologyContent } from './HormonalPathologyContent';

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
        dialogContent={<DigestivePathologyContent />}
      />

      <ServiceCard
        title="NUTRICION CLINICA EN ALTERACIONES HORMONALES (PNI)"
        imgUrl="/images/patologia-hormonal.jpg"
        alt="recupera de lesiones"
        actionText="Ver Tarifa"
        description=""
        dialogTitle="NUTRICION CLINICA EN ALTERACIONES HORMONALES (PNI)"
        dialogContent={<HormonalPathologyContent />}
      />

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
