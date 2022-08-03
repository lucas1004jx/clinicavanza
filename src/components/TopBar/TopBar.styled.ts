import { AppBar } from '@mui/material';
import { styled } from '@mui/system';
import theme from 'styles/theme';

export const StyledAppBar = styled(AppBar)({
  height: '48px',
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row',
  alignItems: 'center',
  padding: theme.spacing(1, 2),
  color: theme.palette.text.primary,
});

export const StyledImage = styled('img')({
  height: '100%',
  objectFit: 'contain',
});
