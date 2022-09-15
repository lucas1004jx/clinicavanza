import { TextField, Typography } from '@mui/material';
import { FC } from 'react';
import { Controller, Control } from 'react-hook-form';
import { InputFieldConfig } from './FormBuilder.model';
import { StyledFieldName, StyledFieldWrapper } from './FormBuilder.styled';

interface Props extends Omit<InputFieldConfig, 'type'> {
    control:Control
    multiline?:boolean
    rows?:number
}

export const InputField:FC<Props> = ({
  control, name, placeholder, fieldName, multiline, rows = 4, required,
}) => (
  <StyledFieldWrapper>
    <StyledFieldName required={required}>
      {fieldName}
    </StyledFieldName>
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <TextField
          id={name}
          label={placeholder}
          variant="outlined"
          multiline={multiline}
          rows={rows}
          {...field}
        />
      )}
    />
  </StyledFieldWrapper>

);
