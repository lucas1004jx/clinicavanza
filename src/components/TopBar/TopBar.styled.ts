import { AppBar } from '@mui/material';
import { styled } from '@mui/system';
import { TOP_BAR_HEIGHT } from 'constants/style';
import theme from 'styles/theme';

export const StyledAppBar = styled(AppBar)({
  height: TOP_BAR_HEIGHT,
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row',
  alignItems: 'center',
  padding: theme.spacing(1, 2),
  color: theme.palette.text.secondary,
});

export const StyledImage = styled('img')({
  height: '100%',
  objectFit: 'contain',
  cursor: 'pointer',
});
