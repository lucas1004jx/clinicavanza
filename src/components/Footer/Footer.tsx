import { Link, Typography } from '@mui/material';
import { ComponentPropsBase } from 'models/baseProps.model';
import { FC } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { CheckPoints } from 'components/CheckPoints';
import { StyledFooter, StyledSocialMediaWrapper, StyledImage } from './Footer.styled';

const emailHref = 'mailTo:info@centroavanza.net';
const telHref = 'tel:983652321';
const insHref = 'https://www.instagram.com/centro.avanza/';

export const Footer:FC<ComponentPropsBase> = ({ className }) => (
  <StyledFooter className={className}>
    <Typography>Horario: 10-14H Y 17-20H</Typography>
    <Typography>
      Email:
      <Link href={emailHref}>info@centroavanza.net</Link>
    </Typography>
    <Typography>
      Tel:
      <Link href={telHref}>
        983652321
      </Link>
    </Typography>

    <StyledSocialMediaWrapper>
      <Link href={insHref} target="_blank">
        <InstagramIcon />
      </Link>
      {/* <FacebookIcon /> */}
    </StyledSocialMediaWrapper>
    {/* <StyledImage src="/images/logo.png" alt="logo" /> */}
    <CheckPoints />
  </StyledFooter>
);
