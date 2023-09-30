import {
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@mui/material';

import { FC } from 'react';
import { StyledCard, StyledCardMediaWrapper } from './Card.styled';

interface Action {
  text:string
  handler:()=>void
}

export interface Props {
  title:string
  imgUrl:string
  alt?:string
  description:string
  primaryAction?:Action
  secondaryAction?:Action
}

export const Card:FC<Props> = ({
  title,
  imgUrl,
  alt = 'service card',
  description,
  primaryAction,
  secondaryAction,
}) => (
  <StyledCard>
    <StyledCardMediaWrapper>
      <CardMedia
        component="img"
        alt={alt}
        height="200"
        image={imgUrl}
      />
    </StyledCardMediaWrapper>
    <div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        {primaryAction && <Button size="small" onClick={primaryAction.handler}>{primaryAction.text}</Button>}
        {secondaryAction && <Button size="small" onClick={secondaryAction.handler}>{secondaryAction.text}</Button>}
      </CardActions>
    </div>

  </StyledCard>
);
