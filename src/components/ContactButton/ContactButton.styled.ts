import styled from '@emotion/styled';
import { Box } from '@mui/material';
import theme from 'styles/theme';

export const StyledBox = styled(Box)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  maxWidth: '90%',
  background: theme.palette.background.paper,
  padding: theme.spacing(4),
});

export const StyledButtonWrapper = styled('div')({
  display: 'flex',
  gap: theme.spacing(1),
  justifyContent: 'flex-end',
});
