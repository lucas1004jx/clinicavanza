import { FormConfig } from 'components/FormBuilder/FormBuilder.model';
import {
  PersonalDataField,
} from 'models/form.model';

export const contactDataConfig:FormConfig<PersonalDataField>[] = [
  {
    type: 'input',
    name: 'user_name',
    fieldName: 'Nombre y appellido',
    rules: {
      required: true,
    },
  },
  {
    type: 'input',
    name: 'email',
    fieldName: 'Email',
    rules: {
      required: true,
    },
  },
  {
    type: 'input',
    name: 'phone_number',
    fieldName: 'Teléfono',
    rules: {
      required: true,
    },
  },
  {
    type: 'input',
    name: 'city',
    fieldName: 'Ciudad y país',
  },
];
