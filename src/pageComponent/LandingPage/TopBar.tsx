import { Typography } from '@mui/material'
import { 
StyledAppBar, 
StyledImage, 
} from './LandingPage.styled'
import CheckIcon from '@mui/icons-material/Check';
import { Header } from './Header';
import { FC } from 'react';



export const TopBar: FC = () => {
  return (
    <StyledAppBar>
        <StyledImage src='/logo.png' alt='logo' />
        <Typography>ES HORA DE CAMBIAR</Typography>
       </StyledAppBar>
  )
}

