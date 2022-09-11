import {
  Container, Paper, Typography,
} from '@mui/material';
import { styled } from '@mui/system';
import theme from 'styles/theme';
import { ContactButton } from '../../components/ContactButton/ContactButton';

export const StyledContainer = styled(Container)({

});

export const StyledHeader = styled('div')({
  height: '240px',
  position: 'relative',
  padding: theme.spacing(2),
  background: 'url(logo.png) no-repeat center center',
  backgroundSize: 'contain',
});

export const StyledTitle = styled(Typography)({
  fontSize: theme.typography.h6.fontSize,
  textAlign: 'center',
});

export const StyledContactButton = styled(ContactButton)({
  position: 'absolute',
  bottom: 0,
  left: '50%',
  transform: 'translateX(-50%)',
});

export const StyledSection = styled(Paper)({
  margin: theme.spacing(3, 0),
  padding: theme.spacing(1.5),
});

export const StyledMediaWrapper = styled('div')({
  marginLeft: theme.spacing(-1.5),
  marginRight: theme.spacing(-1.5),
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
