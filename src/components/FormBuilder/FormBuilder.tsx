import { FC } from 'react';
import { FormConfig, FormBuilderProps } from './FormBuilder.model';
import { InputField } from './InputField';
import { SelectField } from './SelectField';

export const FormBuilder:FC<FormBuilderProps> = ({ configs, control, errors }) => {
  console.log('---errors', errors);
  console.log('---configs', configs);

  const renderFormField = (config:FormConfig) => {
    const hasError = !!errors[config.name];
    switch (config.type) {
      case 'input': {
        return (
          <InputField {...config} control={control} key={config.name} hasError={hasError} />
        );
      }
      case 'textArea': {
        return (
          <InputField {...config} control={control} key={config.name} multiline hasError={hasError} />
        );
      }
      case 'select': {
        return (
          <SelectField {...config} control={control} key={config.name} hasError={hasError} />
        );
      }

      default:
        return <div>input</div>;
    }
  };

  const renderForm = () => configs.map((config) => renderFormField(config));
  return (
    <>
      { renderForm() }
    </>
  );
};
