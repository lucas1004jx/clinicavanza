import {
  Container, Paper, Stack, Typography,
} from '@mui/material';
import { styled } from '@mui/system';
import theme from 'styles/theme';
import { ContactButton } from '../../components/ContactButton/ContactButton';

export const StyledHeader = styled(Stack)({
  margin: theme.spacing(3, 0),
});

export const StyledTitle = styled(Typography)({
  fontSize: theme.typography.h6.fontSize,
  textAlign: 'center',
});

export const StyledContactButton = styled(ContactButton)({
  textAlign: 'center',
});

export const StyledSection = styled(Paper)({
  margin: theme.spacing(3, 0),

});

export const StyledSectionTextWrapper = styled('div')({
  padding: theme.spacing(1.5),
});

export const StyledMediaWrapper = styled('div')({

});

export const StyledImg = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const StyledMap = styled('iframe')({
  width: '100%',
  height: '240px',
  border: 'none',
});
