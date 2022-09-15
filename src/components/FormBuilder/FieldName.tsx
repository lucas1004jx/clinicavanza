import { Typography } from '@mui/material';
import { FC } from 'react';
import { FieldNameProps } from './FormBuilder.model';
import { StyledFieldName } from './FormBuilder.styled';

export const FieldName:FC<FieldNameProps> = ({ name, required }) => (
  <StyledFieldName required={required}>
    {name}
  </StyledFieldName>
);
