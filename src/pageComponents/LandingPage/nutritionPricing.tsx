import {
  List, ListItemIcon, ListItemText, Typography,
} from '@mui/material';
import SpaIcon from '@mui/icons-material/Spa';

const onlinePricing = [
  'Plan nutricional clínico 12 semanas en base al sistema intestinal / hormonal , objetivos y condición de salud a tratar .',
  ' Plan de entrenamiento físico ( en casa o gimnasio ) de acuerdo al estado físico y lesiones del paciente.',
  '- Plan de suplementación básica enfocado a mejorar salud digestiva, inmunitaria y deportiva',
];

const presentPricing = [
  'Primera consulta , análisis competo del sistema intestinal/ hormonal , con explicaciones de la sintomatologia, valoración del estado de forma y composición corporal .',
  'Revisión quincenal presencial en consulta de nutrición 20€.',
];

export const NutritionPricing = () => (
  <>
    <Typography>
      ASESORAMIENTO ONLINE : ( 150€)
    </Typography>
    <List>
      {
        onlinePricing.map((text) => (
          <>
            <ListItemIcon>
              <SpaIcon />
            </ListItemIcon>
            <ListItemText primary={text} />
          </>
        ))
        }
      <Typography>
        ASESORAMIENTO PRESENCIAL : (50€)
      </Typography>
      {
        presentPricing.map((text) => (
          <>
            <ListItemIcon>
              <SpaIcon />
            </ListItemIcon>
            <ListItemText primary={text} />
          </>
        ))
        }
    </List>
  </>
);
