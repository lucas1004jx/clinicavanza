import {
  IconButton,
  Paper, Stack, Typography,
} from '@mui/material';
import { styled } from '@mui/system';
import theme from 'styles/theme';
import { ContactButton } from '../../components/ContactButton/ContactButton';

export const StyledHeader = styled(Stack)({
  margin: theme.spacing(3, 0),
  [theme.breakpoints.up('sm')]: {
    margin: theme.spacing(6, 0),
  },
  [theme.breakpoints.up('md')]: {
    marginTop: theme.spacing(8),
  },
});

export const StyledHeaderText = styled(Typography)({
  fontSize: theme.typography.body2.fontSize,
  [theme.breakpoints.up('sm')]: {
    fontSize: theme.typography.body1.fontSize,
  },
  [theme.breakpoints.up('md')]: {
    fontSize: theme.typography.h6.fontSize,
  },
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
