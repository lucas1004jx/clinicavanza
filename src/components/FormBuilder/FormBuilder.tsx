import { TextField } from '@mui/material';
import { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { FormConfig, FormBuilderProps } from './FormBuilder.model';

export const FormBuilder:FC<FormBuilderProps> = ({ configs, onSubmit }) => {
  const { control, handleSubmit } = useForm();

  const renderFormField = (config:FormConfig) => {
    switch (config.type) {
      case 'input':
        return (
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            render={({ field }) => <TextField {...field} />}
          />
        );

      default:
        return <div>input</div>;
    }
  };

  const renderForm = () => configs.map((config) => renderFormField(config));
  return (
    <form onSubmit={handleSubmit(onSubmit)} id="my-form">
      {renderForm()}
    </form>
  );
};
