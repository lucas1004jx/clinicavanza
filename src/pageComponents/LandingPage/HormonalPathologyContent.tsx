import {
  Divider,
  List, ListItem, ListItemText, Typography,
} from '@mui/material';

const descriptions = [
  '- TCA ansiedad por la comida',
  '- Hipo/hipertiroidismo',
  '- Enfermedad Hashimoto',
  '- Fatiga crónica-insomnio',
  '- Dolor menstrual / ausencia menstruación',
  '- SOP síndrome ovario poli quístico',
  '- Resistencia a la insulina',
  '- Perdida de grasa corporal',
  '- Sobre peso /obesidad',
];

const pricing = [
  '- 75€ ( mensual)',
  '- 200 € ( trimestre)',
];

export const HormonalPathologyContent = () => (
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
      Consulta presencial
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
