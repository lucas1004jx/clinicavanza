import { Button, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { FC } from 'react';
import Link from 'next/link';
import {
  StyledCheckPoint,
  StyledCheckPointWrapper,
  StyledHeader,
  StyledHeaderMainTitle,
  StyledHeaderTitleWrapper,
} from './LandingPage.styled';
import { CheckPointProps } from './LandingPage.model';

const checkPoints = ['PIERDE PESO', 'MAS ENERGIA', 'SIENTE BIEN'];

const CheckPoint:FC<CheckPointProps> = ({ text }) => (
  <StyledCheckPoint>
    <CheckIcon fontSize="small" />
    <Typography variant="subtitle2" fontWeight="light">{text}</Typography>
  </StyledCheckPoint>
);

const CheckPoints:FC = () => (
  <StyledCheckPointWrapper>
    {
            checkPoints.map((text) => <CheckPoint text={text} key={text} />)
        }
  </StyledCheckPointWrapper>
);

export const Header: FC = () => (
  <StyledHeader>
    <StyledHeaderTitleWrapper>
      <StyledHeaderMainTitle>
        <Typography variant="h5" fontWeight="light">
          UNA VIDA SALUDABLE
        </Typography>
        <Typography variant="h5" fontWeight="bold">
          EMPIEZA AHORA
        </Typography>
      </StyledHeaderMainTitle>
      <CheckPoints />
      <Link href="/inicial">
        <Button variant="contained">EMPIEZA</Button>
      </Link>
    </StyledHeaderTitleWrapper>
  </StyledHeader>
);
