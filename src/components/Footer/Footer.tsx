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
        <Link href={href} color="inherit">clinicavanza@gmail.com</Link>
      </Typography>
      <Typography>Tel:902 346 890 </Typography>
    </StyledFooter>
  );
};
