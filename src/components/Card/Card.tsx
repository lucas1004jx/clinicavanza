import {
  Card as MuiCard,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@mui/material';

import { FC } from 'react';

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
  <MuiCard>
    <CardMedia
      component="img"
      alt={alt}
      height="140"
      image={imgUrl}
    />
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
  </MuiCard>
);
