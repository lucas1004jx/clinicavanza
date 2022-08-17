import { MenuItem, Typography } from '@material-ui/core';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FC, useState } from 'react';
import { Control, Controller } from 'react-hook-form';
import { SelectFieldConfig } from './FormBuilder.model';
import { StyledFieldWrapper } from './FormBuilder.styled';

interface Props extends SelectFieldConfig {
    control:Control
}

export const SelectField:FC<Props> = ({
  fieldName, control, name, options,
}) => (
  <StyledFieldWrapper>
    <Typography>
      {fieldName}
    </Typography>
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
