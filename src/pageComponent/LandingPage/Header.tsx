import { Typography } from '@mui/material'
import Head from 'next/head'
import { 
StyledAppBar, 
  StyledCheckPoint, 
  StyledCheckPointWrapper, 
StyledHeader,
StyledHeaderTitleWrapper,
StyledImage, 
StyledTitle
} from './LandingPage.styled'
import CheckIcon from '@mui/icons-material/Check';
import { FC } from 'react';
import { CheckPointProps } from './LandingPage.model';

const checkPoints = ['PIERDE PESO','MAS ENERGIA','SIENTE BIEN']

const CheckPoint:FC<CheckPointProps> = ({text}) => (
    <StyledCheckPoint>
        <CheckIcon fontSize='small'/>
        <Typography variant='subtitle2' fontWeight='light'>{text}</Typography>
    </StyledCheckPoint>
)

const CheckPoints:FC = () => (
    <StyledCheckPointWrapper>
        {
            checkPoints.map(text => <CheckPoint text={text} key={text}/>)
        }
    </StyledCheckPointWrapper>
)

export const Header: FC = () => {
  return (
    <StyledHeader>
        <StyledHeaderTitleWrapper>
          <StyledTitle>
          <Typography variant='h5'>
          UNA VIDA SALUDABLE
        </Typography>
        <Typography variant='h5' fontWeight='bold'>
          EMPIEZA AHORA
        </Typography>
        </StyledTitle>
        <CheckPoints />
          
        </StyledHeaderTitleWrapper>
        
       </StyledHeader>
  )
}

