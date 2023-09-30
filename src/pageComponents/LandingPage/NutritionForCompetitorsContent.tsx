import {
  Divider,
  List, ListItem, ListItemText, Typography,
} from '@mui/material';
import SpaIcon from '@mui/icons-material/Spa';

const descriptions = [
  '- Preparación competiciones fisicoculturismo',
  '- Alto rendimiento',
  '- Rutinas de entrenamiento específicas y adaptadas',
];

const pricings = [
  '- 220€ trimestre',
];

export const NutritionForCompetitorsContent = () => (
  <>
    <List>
      {
        descriptions.map((text) => (
          <ListItem disablePadding>
            <ListItemText primary={text} />
          </ListItem>
        ))
        }
    </List>

    <Typography fontWeight="bold">
      Cuota
    </Typography>
    <Divider />
    <List>
      {
        pricings.map((text) => (
          <ListItem disablePadding>
            <ListItemText primary={text} />
          </ListItem>
        ))
        }
    </List>
  </>
);
