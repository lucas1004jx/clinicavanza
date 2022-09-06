import { Link, Typography } from '@mui/material';
import { ComponentPropsBase } from 'models/baseProps';
import { FC } from 'react';
import { StyledFooter } from './Footer.styled';

export const Footer:FC<ComponentPropsBase> = ({ className }) => {
  const href = 'mailTo:clinicavanza@gmail.com';
  return (
    <StyledFooter className={className}>
      <Typography>Horario: L - V De 10:00 A 20:00</Typography>
      <Typography>
        Email:
        <Link href={href} color="inherit">info@centroavanza.net</Link>
      </Typography>
      <Typography>
        Tel:983 403 450
      </Typography>
      <Typography>
        Movil:605 611 639
      </Typography>
    </StyledFooter>
  );
};
