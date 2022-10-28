import { DefaultLayout } from 'layout/DefaultLayout';
import type { NextPage } from 'next';
import Head from 'next/head';
import { LandingPage } from 'pageComponents/LandingPage';

const Landing: NextPage = () => (
  <>
    <Head>
      <title>Centro Avanza</title>
      <meta name="description" content="Somos un centro de nutrición , situado en La Cisterniga, Valladolid." />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <DefaultLayout>
      <LandingPage />
    </DefaultLayout>
  </>
);

export default Landing;
