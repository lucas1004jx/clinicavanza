import { Container } from '@mui/material';
import { FC } from 'react';

import { WhatsappButton } from 'components/WhatsappButton/WhatsappButton';
import { Header } from './Header';
import { Service } from './Service';
import { Location } from './Location';
import { Results } from './Results';

export const LandingPage: FC = () => (
  <Container>
    <Header />
    <Service />
    {/* <Results /> */}
    <Location />
    <WhatsappButton phoneNumber="605611639" />
  </Container>
);
