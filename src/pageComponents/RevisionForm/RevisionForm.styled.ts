import { Container } from '@mui/material';
import { styled } from '@mui/system';
import theme from 'styles/theme';

export const StyledContainer = styled(Container)({
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
});

export const StyledButtonWrapper = styled('div')({
  marginTop: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
});
