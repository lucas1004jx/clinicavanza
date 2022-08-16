import { TextField } from '@material-ui/core';
import { FC } from 'react';
import { Controller, Control } from 'react-hook-form';
import { InputFieldConfig } from './FormBuilder.model';

interface InputFieldProps extends InputFieldConfig{
    control:Control
}

export const InputField:FC<InputFieldProps> = ({ control, name, label }) => (
  <Controller
    name={name}
    control={control}
    defaultValue=""
    render={({ field }) => <TextField id={name} label={label} variant="outlined" {...field} />}
  />
);
