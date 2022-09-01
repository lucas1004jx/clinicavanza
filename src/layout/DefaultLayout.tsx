import { TopBar } from 'components/TopBar/TopBar';
import { FC } from 'react';
import { DefaultLayoutProps } from './DefaultLayout.model';
import { StyledFooter, StyledlayoutContainer } from './DefaultLayout.styled';

export const DefaultLayout:FC<DefaultLayoutProps> = ({ children }) => (
  <StyledlayoutContainer>
    <TopBar />
    {children}
    <StyledFooter />
  </StyledlayoutContainer>
);
