import { Typography } from '@mui/material';
import { styled } from '@mui/system';
import theme from 'styles/theme';
import { StyleProps } from './FormBuilder.model';

export const StyledFieldWrapper = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: theme.spacing(2),
}));

export const StyledFieldName = styled(Typography)<StyleProps>(({ required }) => ({
  position: 'relative',
  width: 'fit-content',
  '&:after': {
    content: required ? "'*'" : "''",
    display: 'block',
    position: 'absolute',
    right: 0,
    top: 0,
    transform: 'translateX(100%)',
    color: theme.palette.warning.main,
  },
}));
