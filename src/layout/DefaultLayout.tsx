import { Footer } from 'components/Footer/Footer';
import { TopBar } from 'components/TopBar/TopBar';
import { FC } from 'react';
import { DefaultLayoutProps } from './DefaultLayout.model';
import { StyledlayoutContainer } from './DefaultLayout.styled';

export const DefaultLayout:FC<DefaultLayoutProps> = ({ children }) => (
  <StyledlayoutContainer>
    <TopBar />
    {children}
    <Footer />
  </StyledlayoutContainer>
);
