import { AppBar, Paper } from '@mui/material';
import { styled } from '@mui/system';
import { url } from 'inspector';
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


export const StyledHeader = styled('div')({
  height:'240px',
 marginTop:theme.spacing(6),
 position:'relative',
 padding:theme.spacing(2),
 background:'url(header-bcg.png) no-repeat center center',
 backgroundSize: 'cover'
})

export const StyledHeaderTitleWrapper = styled('div')({
  position:'absolute',
  color:theme.palette.background.default,
  top:'50%',
  transform:'translateY(-50%)',
  width:'70%'
})

export const StyledTitle = styled('div')({
 marginBottom:theme.spacing(2)
})

export const StyledCheckPoint = styled('div')({
 display:'flex',
 gap:theme.spacing(1)
})

export const StyledCheckPointWrapper = styled('div')({
  display:'flex',
  gap:theme.spacing(1),
  flexWrap:'wrap'
 })

 export const StyledSection = styled('section')({
  margin:theme.spacing(3,0),
 })

 export const StyledImg = styled('img')({
    width:'100%',
    height:'100%',
    objectFit:'cover'
 })