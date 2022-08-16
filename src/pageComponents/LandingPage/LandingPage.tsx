import { Container } from '@mui/material';
import Head from 'next/head';
import { FC } from 'react';
import { DefaultLayout } from 'layout/DefaultLayout';
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
    </Container>
  </>
);
