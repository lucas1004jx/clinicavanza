import { Container } from '@mui/material';
import { FC } from 'react';

import { WhatsappButton } from 'components/WhatsappButton/WhatsappButton';
import { Header } from './Header';
import { AboutUs } from './AboutUs';
import { Service } from './Service';
import { Location } from './Location';

export const LandingPage: FC = () => (
  <>
    <Header />
    <Container>
      <AboutUs />
      <Service />
      <Location />
      <WhatsappButton phoneNumber="605611639" />
    </Container>
  </>
);
