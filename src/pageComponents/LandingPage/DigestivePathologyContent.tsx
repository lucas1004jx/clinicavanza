import {
  Divider,
  List, ListItem, ListItemText, Typography,
} from '@mui/material';

const descriptions = [
  '- Acidez/reflujo',
  '- Ulceras',
  '- Gastritis',
  '- Helicobacter pylori',
  '- MIcrobiota: disbiosis/SIBO',
  '- Hinchazón abdominal/ gases',
  '- EII (enfermedad inflamatoria intestinal)',
  '- Estreñimiento /diarreas',
  '- Ulceras ...',
];

const pricing = [
  '- 75€ ( mensual)',
  '- 200 € ( trimestre)',
];

export const DigestivePathologyContent = () => (
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
