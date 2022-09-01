import { styled } from '@mui/system';
import { Footer } from 'components/Footer/Footer';
import { TOP_BAR_HEIGHT, FOOTER_HEIGHT } from 'constants/style';

export const StyledlayoutContainer = styled('main')({
  paddingTop: TOP_BAR_HEIGHT,
  paddingBottom: FOOTER_HEIGHT,
  position: 'relative',
  minHeight: '100vh',
});

export const StyledFooter = styled(Footer)({
  position: 'absolute',
  width: '100%',
  bottom: 0,
});
