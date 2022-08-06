import { Footer } from 'components/Footer/Footer';
import { TopBar } from 'components/TopBar/TopBar';
import { FC } from 'react';
import { DefaultLayoutProps } from './DefaultLayout.model';

export const DefaultLayout:FC<DefaultLayoutProps> = ({ children }) => (
  <main>
    <TopBar />
    {children}
    <Footer />
  </main>
);
