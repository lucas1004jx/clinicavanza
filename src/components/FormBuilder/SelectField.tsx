import { MenuItem, Select } from '@mui/material';
import { FC } from 'react';
import { Controller } from 'react-hook-form';
import { FormFieldPropsBase, SelectFieldConfig } from './FormBuilder.model';
import { StyledFieldName, StyledFieldWrapper } from './FormBuilder.styled';

interface Props extends SelectFieldConfig, FormFieldPropsBase {
}

export const SelectField:FC<Props> = ({
  fieldName,
  control,
  name,
  options,
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
          <Select
            {...field}
            error={hasError}
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
};
