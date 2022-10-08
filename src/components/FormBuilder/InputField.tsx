import { TextField, Typography } from '@mui/material';
import { FC } from 'react';
import { Controller } from 'react-hook-form';
import { FormFieldPropsBase, InputFieldConfig } from './FormBuilder.model';
import { StyledFieldName, StyledFieldWrapper } from './FormBuilder.styled';

interface Props extends Omit<InputFieldConfig, 'type'>, FormFieldPropsBase {
    multiline?:boolean
    rows?:number
}

export const InputField:FC<Props> = ({
  control,
  name,
  placeholder,
  fieldName,
  multiline,
  rows = 4,
  hasError,
  rules = {},
}) => {
  const hasRules = Object.keys(rules).length >= 1;
  return (

    <StyledFieldWrapper>
      <StyledFieldName required={hasRules}>
        {fieldName}
      </StyledFieldName>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        rules={rules}
        render={({ field }) => (
          <TextField
            id={name}
            error={hasError}
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
};
