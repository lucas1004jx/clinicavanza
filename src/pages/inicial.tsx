import { DefaultLayout } from 'layout/DefaultLayout';
import Head from 'next/head';
import { InitialForm } from 'pageComponents/InitialForm';

import { FC } from 'react';

const RevisionPage:FC = () => (
  <>
    <Head>
      <title>Centro Avanza - formulario inicial </title>
      <meta name="description" content="Somos un centro de fisioterapia avanzada y nutrición , situado en La Cisterniga, Valladolid." />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <DefaultLayout>
      <InitialForm />
    </DefaultLayout>
  </>
);
export default RevisionPage;
