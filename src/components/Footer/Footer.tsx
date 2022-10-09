import { Link, Typography } from '@mui/material';
import { ComponentPropsBase } from 'models/baseProps.model';
import { FC } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { CheckPoints } from 'components/CheckPoints';
import { StyledFooter, StyledSocialMediaWrapper, StyledImage } from './Footer.styled';

export const Footer:FC<ComponentPropsBase> = ({ className }) => {
  const href = 'mailTo:clinicavanza@gmail.com';
  return (
    <StyledFooter className={className}>
      <Typography>Horario: 10-14H Y 17-20H</Typography>
      <Typography>
        Email:
        <Link href={href}>info@centroavanza.net</Link>
      </Typography>
      <Typography>
        Tel:
        <Link href="tel:983652321">
          983652321
        </Link>
      </Typography>

      <StyledSocialMediaWrapper>
        <Link href="https://www.instagram.com/centro.avanza/" target="_blank">
          <InstagramIcon />
        </Link>
        <FacebookIcon />
      </StyledSocialMediaWrapper>
      <StyledImage src="/images/logo.png" alt="logo" />
      <CheckPoints />
    </StyledFooter>
  );
};
