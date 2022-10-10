import {
  Dialog,
  IconButton,
  ListItem,
  Paper, Stack, Typography,
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

export const StyledLogo = styled('img')({
  width: '100%',
  height: '80px',
  objectFit: 'cover',
});

export const StyledMap = styled('iframe')({
  width: '100%',
  height: '240px',
  border: 'none',
});

export const StyledDialogInner = styled('div')({
  padding: theme.spacing(2),
  position: 'relative',
});

export const StyledCloseIcon = styled(IconButton)({
  padding: theme.spacing(2),
  position: 'absolute',
  right: 0,
  top: 0,
});
