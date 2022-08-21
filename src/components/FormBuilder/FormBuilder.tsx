import { FC } from 'react';
import { FormConfig, FormBuilderProps } from './FormBuilder.model';
import { InputField } from './InputField';
import { SelectField } from './SelectField';

export const FormBuilder:FC<FormBuilderProps> = ({ configs, control }) => {
  const renderFormField = (config:FormConfig) => {
    switch (config.type) {
      case 'input': {
        return (
          <InputField {...config} control={control} key={config.name} />
        );
      }
      case 'textArea': {
        return (
          <InputField {...config} control={control} key={config.name} />
        );
      }
      case 'select': {
        return (
          <SelectField {...config} control={control} key={config.name} />
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
