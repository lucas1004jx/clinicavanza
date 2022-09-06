import {
  Container, Paper, Typography,
} from '@mui/material';
import { styled } from '@mui/system';
import theme from 'styles/theme';

export const StyledContainer = styled(Container)({

});

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
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  alignItems: 'flex-start',
});

export const StyledHeaderMainTitle = styled('div')({

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

export const StyledSection = styled(Paper)({
  margin: theme.spacing(3, 0),
  padding: theme.spacing(1.5),
});

export const StyledMediaWrapper = styled('div')({
  marginLeft: theme.spacing(-1.5),
  marginRight: theme.spacing(-1.5),
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
