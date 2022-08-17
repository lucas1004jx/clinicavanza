import { TextField, Typography } from '@mui/material';
import { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { FormConfig, FormBuilderProps } from './FormBuilder.model';
import { InputField } from './InputField';
import { SelectField } from './SelectField';

export const FormBuilder:FC<FormBuilderProps> = ({ configs, onSubmit }) => {
  const { control, handleSubmit } = useForm();

  const renderFormField = (config:FormConfig) => {
    switch (config.type) {
      case 'input': {
        return (
          <InputField {...config} control={control} />
        );
      }
      case 'select': {
        return (
          <SelectField {...config} control={control} />
        );
      }

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
