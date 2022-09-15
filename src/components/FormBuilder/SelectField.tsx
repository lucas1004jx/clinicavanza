import { MenuItem, Typography, Select } from '@mui/material';
import { FC } from 'react';
import { Control, Controller } from 'react-hook-form';
import { SelectFieldConfig } from './FormBuilder.model';
import { StyledFieldName, StyledFieldWrapper } from './FormBuilder.styled';

interface Props extends SelectFieldConfig {
    control:Control
}

export const SelectField:FC<Props> = ({
  fieldName, control, name, options, required,
}) => (
  <StyledFieldWrapper>
    <StyledFieldName required>
      {fieldName}
    </StyledFieldName>
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <Select
          {...field}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
        >
          {
                options.map(({ id, name: optName }) => <MenuItem value={id} key={id}>{optName}</MenuItem>)
            }

        </Select>
      )}
    />

  </StyledFieldWrapper>
);
