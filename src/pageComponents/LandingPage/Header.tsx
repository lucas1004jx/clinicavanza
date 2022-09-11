import { FC } from 'react';
import { ContactButton } from 'components/ContactButton';
import {
  StyledHeader,
  StyledContactButton,
} from './LandingPage.styled';

export const Header: FC = () => (
  <StyledHeader>
    <StyledContactButton />
  </StyledHeader>
);
