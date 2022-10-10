import {
  Divider,
  List, ListItem, ListItemText, Typography,
} from '@mui/material';
import SpaIcon from '@mui/icons-material/Spa';

const initialPricing = [
  '- Protocolos de alimentación adaptado a un objetivo físico concreto con rutina de entrenamiento incluidas en todos los planes , revisiones via whats app , y la posibilidad de revisiones presenciales en nuestro centro.',
];

const advancePricing = [
  '- Protocolo de alimentación adaptado a deportistas de alto rendimiento y competidores contacto directo whats app y telefónico 24/7 , con revisiones adaptadas en cada proceso , de manera presencial en nuestro centro.',
];

export const TrainingPricing = () => (
  <>
    <Typography fontWeight="bold">
      Initial : ( 120 € / trimestre )
    </Typography>
    <Divider />
    <List>
      {
        initialPricing.map((text) => (
          <ListItem disablePadding>
            <ListItemText primary={text} />
          </ListItem>
        ))
        }
    </List>

    <Typography fontWeight="bold">
      Avanzado : ( los precios se marcaran de manera individual dependiendo del
      athleta/deportista)
    </Typography>
    <Divider />
    <List>
      {
        advancePricing.map((text) => (
          <ListItem disablePadding>
            <ListItemText primary={text} />
          </ListItem>
        ))
        }
    </List>
  </>
);
