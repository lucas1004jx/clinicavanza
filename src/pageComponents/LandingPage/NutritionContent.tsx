import {
  Divider,
  List, ListItem, ListItemText, Typography,
} from '@mui/material';

const descriptions = [
  '- Recomposición corporal',
  '- Rutinas de entrenamiento',
];

const pricing = [
  '150€ trimestre',
];

export const NutritionContent = () => (
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
        pricing.map((text) => (
          <ListItem disablePadding>
            <ListItemText primary={text} />
          </ListItem>
        ))
        }
    </List>

  </>
);
