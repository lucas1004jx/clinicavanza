import { DefaultLayout } from 'layout/DefaultLayout';
import { RevisionForm } from 'pageComponents/RevisionForm';
import { FC } from 'react';

const RevisionPage:FC = () => (
  <DefaultLayout>
    <RevisionForm />
  </DefaultLayout>
);
export default RevisionPage;
