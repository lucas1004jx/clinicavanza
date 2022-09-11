import styled from '@emotion/styled';
import { IconButton } from '@mui/material';
import theme from 'styles/theme';

export const StyledWhatsappButton = styled(IconButton)({
  position: 'fixed',
  zIndex: '100',
  bottom: '50px',
  right: '16px',
  color: '#25D366',
  background: theme.palette.background.default,
  boxShadow: `0px 0px 10px 0px ${theme.palette.secondary.main}`,
  '&:hover': {
    background: theme.palette.grey[200],
  },
});
