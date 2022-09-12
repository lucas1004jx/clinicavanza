import { FC } from 'react';
import { ImageListItem, ImageListItemBar } from '@mui/material';
import { ImageProps } from './Image.model';

export const Image:FC<ImageProps> = ({ src, title, description }) => {
  console.log();

  return (
    <ImageListItem>
      <img
        src={`${src}?w=248&fit=crop&auto=format`}
        srcSet={`${src}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={title}
        loading="lazy"
      />
      <ImageListItemBar
        title={title}
        subtitle={description}
      />
    </ImageListItem>
  );
};
