import { Card, styled } from '@mui/material';
import theme from 'styles/theme';

export const StyledCard = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
  },
});

export const StyledCardMediaWrapper = styled('div')({
  width: '100%',
  height: '140px',
  [theme.breakpoints.up('sm')]: {
    height: '200px',
    width: '40%',
    flexShrink: '0',
  },
});
