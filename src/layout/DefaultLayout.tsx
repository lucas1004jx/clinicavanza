import { TopBar } from 'components/TopBar/TopBar';
import { FC } from 'react';
import { DefaultLayoutProps } from './DefaultLayout.model';
import { StyledFooter, StyledLayoutContainer } from './DefaultLayout.styled';

export const DefaultLayout:FC<DefaultLayoutProps> = ({ children }) => (
  <StyledLayoutContainer>
    <TopBar />
    {children}
    <StyledFooter />
  </StyledLayoutContainer>
);
