import { FOOTER_HEIGHT } from 'constants/style';
import { styled } from '@mui/system';
import theme from 'styles/theme';

export const StyledFooter = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(0.8),
  background: theme.palette.primary.main,
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
  minHeight: FOOTER_HEIGHT,
});

export const StyledSocialMediaWrapper = styled('div')({
  display: 'flex',
  gap: theme.spacing(1),
});

export const StyledImage = styled('img')({
  width: '200px',
});
