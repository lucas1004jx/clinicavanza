import { FormConfig } from 'components/FormBuilder/FormBuilder.model';
import {
  GoalDataField,
  HabitDataField, PathologiesDataField, PersonalDataField, RelatedDataField,
} from 'models/form.model';

export const contactDataConfig:FormConfig<PersonalDataField>[] = [
  {
    type: 'input',
    name: 'user_name',
    fieldName: 'Nombre y appellido',
  },
  {
    type: 'input',
    name: 'email',
    fieldName: 'Email',
  },
  {
    type: 'input',
    name: 'phone_number',
    fieldName: 'Teléfono',
  },
  {
    type: 'input',
    name: 'city',
    fieldName: 'Ciudad y país',
  },
];
