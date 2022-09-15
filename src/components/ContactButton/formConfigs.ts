import { FormConfig } from 'components/FormBuilder/FormBuilder.model';
import {
  PersonalDataField,
} from 'models/form.model';

export const contactDataConfig:FormConfig<PersonalDataField>[] = [
  {
    type: 'input',
    name: 'user_name',
    fieldName: 'Nombre y appellido',
    required: true,
  },
  {
    type: 'input',
    name: 'email',
    fieldName: 'Email',
    required: true,
  },
  {
    type: 'input',
    name: 'phone_number',
    fieldName: 'Teléfono',
    required: true,
  },
  {
    type: 'input',
    name: 'city',
    fieldName: 'Ciudad y país',
  },
];
