import { Typography } from '@mui/material';
import { styled } from '@mui/system';
import theme from 'styles/theme';

export const StyledHeader = styled('div')({
  height: '240px',
  position: 'relative',
  padding: theme.spacing(2),
  background: 'url(header-bcg.png) no-repeat center center',
  backgroundSize: 'cover',
});

export const StyledTitle = styled(Typography)({
  fontSize: theme.typography.h6.fontSize,
  textAlign: 'center',
});

export const StyledHeaderTitleWrapper = styled('div')({
  position: 'absolute',
  color: theme.palette.background.default,
  top: '50%',
  transform: 'translateY(-50%)',
  width: '70%',
});

export const StyledHeaderMainTitle = styled('div')({
  marginBottom: theme.spacing(2),
});

export const StyledCheckPoint = styled('div')({
  display: 'flex',
  gap: theme.spacing(1),
});

export const StyledCheckPointWrapper = styled('div')({
  display: 'flex',
  gap: theme.spacing(1),
  flexWrap: 'wrap',
});

export const StyledSection = styled('section')({
  margin: theme.spacing(3, 0),
});

export const StyledImg = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const StyledMap = styled('iframe')({
  width: '100%',
  height: '240px',
  border: 'none',
});
