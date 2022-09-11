import { Typography } from '@mui/material';
import { FC } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import { CheckPointProps } from './CheckPoints.model';
import { StyledCheckPoint, StyledCheckPointWrapper } from './CheckPoints.styled';

const checkPoints = ['PIERDE PESO', 'MAS ENERGIA', 'SIENTE BIEN'];

const CheckPoint:FC<CheckPointProps> = ({ text }) => (
  <StyledCheckPoint>
    <CheckIcon fontSize="small" />
    <Typography variant="caption" fontWeight="light">{text}</Typography>
  </StyledCheckPoint>
);

export const CheckPoints:FC = () => (
  <StyledCheckPointWrapper>
    {
            checkPoints.map((text) => <CheckPoint text={text} key={text} />)
        }
  </StyledCheckPointWrapper>
);
