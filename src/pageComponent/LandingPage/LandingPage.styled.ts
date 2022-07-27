import { AppBar } from '@mui/material';
import { styled } from '@mui/system';
import theme from 'styles/theme';

export const StyledAppBar = styled(AppBar)({
  height:'48px',
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row',
  alignItems: 'center',
  padding:theme.spacing(1,2),
  color:theme.palette.text.primary
});

export const StyledImage = styled('img')({
  height:'100%',
  objectFit:'contain'
})

export const StyledHeaderImg = styled('img')({
  width:'100%',
  height:'240px',
  objectFit:'cover'
})

export const StyledHeader = styled('div')({
 marginTop:theme.spacing(6),
 position:'relative'
})

export const StyledHeaderTitleWrapper = styled('div')({
  position:'absolute',
  color:theme.palette.background.default
})

export const StyledTitle = styled('div')({
  
})