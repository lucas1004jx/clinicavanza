import { TextField, Typography } from '@mui/material';
import { FC } from 'react';
import { Controller, Control } from 'react-hook-form';
import { InputFieldConfig } from './FormBuilder.model';
import { StyledFieldWrapper } from './FormBuilder.styled';

interface Props extends InputFieldConfig{
    control:Control
}

export const InputField:FC<Props> = ({
  control, name, placeholder, fieldName,
}) => (
  <StyledFieldWrapper>
    <Typography>
      {fieldName}
    </Typography>
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => <TextField id={name} label={placeholder} variant="outlined" {...field} />}
    />
  </StyledFieldWrapper>

);
