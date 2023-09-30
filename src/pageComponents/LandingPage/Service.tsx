import { Stack } from '@mui/material';
import { FC } from 'react';
import { StyledTitle } from './LandingPage.styled';
import { ServiceCard } from './ServiceCard';
import { DigestivePathologyContent } from './DigestivePathologyContent';
import { HormonalPathologyContent } from './HormonalPathologyContent';
import { NutritionContent } from './NutritionContent';
import { NutritionForCompetitorsContent } from './NutritionForCompetitorsContent';

export const Service:FC = () => (
  <>
    <StyledTitle fontWeight="lighter" gutterBottom>NUESTROS SERVICIOS </StyledTitle>
    <Stack spacing={4}>
      <ServiceCard
        title="NUTRICION CLINICA EN PATOLOGIA DIGESTIVA (PNI)"
        imgUrl="/images/patologia-disgestiva.jpg"
        alt="patologia digestiva"
        description="Problemas gastrointestinales tales como gases, reflujo , inflamación intestinal, estreñimiento, resistencia a la insulina, amenorrea ,disbiosis, intolerancias..."
        actionText="Ver tarifa & más info"
        dialogTitle="NUTRICION CLINICA EN PATOLOGIA DIGESTIVA (PNI)"
        dialogContent={<DigestivePathologyContent />}
      />

      <ServiceCard
        title="NUTRICION CLINICA EN ALTERACIONES HORMONALES (PNI)"
        imgUrl="/images/patologia-hormonal.jpg"
        alt="patologia hormonal"
        actionText="Ver tarifa & más info"
        description=""
        dialogTitle="NUTRICION CLINICA EN ALTERACIONES HORMONALES (PNI)"
        dialogContent={<HormonalPathologyContent />}
      />

      <ServiceCard
        title="NUTRICION DEPORTIVA"
        imgUrl="/images/dieta.png"
        alt="nutricion deportiva"
        actionText="Ver tarifa & más info"
        description=""
        dialogTitle="NUTRICION DEPORTIVA"
        dialogContent={<NutritionContent />}
      />

      <ServiceCard
        title="
        NUTRICION DEPORTIVA COMPETIDORES"
        imgUrl="/images/entreno.png"
        alt="nutricion deportiva competidores"
        actionText="Ver tarifa & más info"
        description=""
        dialogTitle="NUTRICION DEPORTIVA COMPETIDORES"
        dialogContent={<NutritionForCompetitorsContent />}
      />
    </Stack>
  </>
);
