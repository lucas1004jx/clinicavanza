import { Link, Typography } from '@mui/material';
import { ComponentPropsBase } from 'models/baseProps';
import { FC } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { CheckPoints } from 'components/CheckPoints';
import { StyledFooter, StyledSocialMediaWrapper, StyledImage } from './Footer.styled';

export const Footer:FC<ComponentPropsBase> = ({ className }) => {
  const href = 'mailTo:clinicavanza@gmail.com';
  return (
    <StyledFooter className={className}>
      <Typography>Horario: L-V De 10:00 A 20:00</Typography>
      <Typography>
        Email:
        <Link href={href}>info@centroavanza.net</Link>
      </Typography>
      <Typography>
        Tel:
        <Link href="tel:983403450">
          983 403 450
        </Link>
      </Typography>
      <Typography>
        Movil:
        <Link href="tel:605611639">
          605 611 639
        </Link>
      </Typography>

      <StyledSocialMediaWrapper>
        <Link href="https://www.instagram.com/centro.avanza/" target="_blank">
          <InstagramIcon />
        </Link>
        <FacebookIcon />
      </StyledSocialMediaWrapper>
      <Link href="/">
        <StyledImage src="/logo.png" alt="logo" />
      </Link>
      <CheckPoints />
    </StyledFooter>
  );
};
