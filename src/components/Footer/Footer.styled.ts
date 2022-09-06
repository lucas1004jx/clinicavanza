import { FOOTER_HEIGHT } from 'constants/style';
import { styled } from '@mui/system';
import theme from 'styles/theme';

export const StyledFooter = styled('div')({
  background: theme.palette.primary.main,
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
  minHeight: FOOTER_HEIGHT,
});
