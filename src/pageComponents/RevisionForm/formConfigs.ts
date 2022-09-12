import { FormConfig } from 'components/FormBuilder/FormBuilder.model';
import {
  GoalDataField,
  HabitDataField, PathologiesDataField, PersonalDataField, RelatedDataField,
} from 'models/form.model';

export const personalDataConfigs:FormConfig<PersonalDataField>[] = [
  {
    type: 'input',
    name: 'user_name',
    fieldName: 'Nombre y appellido',
  },
  {
    type: 'input',
    name: 'age',
    fieldName: 'Edad',
  },
  {
    type: 'input',
    name: 'initial_weight',
    fieldName: 'Peso inicial(en ayunas)',
  },
  {
    type: 'input',
    name: 'height',
    fieldName: 'Altura',
  },
  {
    type: 'input',
    name: 'blood_group',
    fieldName: 'Group sanguíneo',
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
  {
    type: 'input',
    name: 'ins_handler',
    fieldName: 'Instagram',
  },
  {
    type: 'select',
    name: 'consent',
    fieldName: 'Consentimiento a promocionar tu imagen en redes sociales.',
    options: [
      {
        id: 'sí',
        name: 'sí',
      },
      {
        id: 'no',
        name: 'no',
      },
      {
        id: 'Sí, pero ocultando mi identidad',
        name: 'Sí, pero ocultando mi identidad',
      },
    ],
  },
];

export const pathologiesDataConfigs:FormConfig<PathologiesDataField>[] = [
  {
    type: 'textArea',
    name: 'allergy',
    fieldName: 'Alergias, enfermedades patológicas conocidas',
  },
];

export const habitDataConfigs:FormConfig<HabitDataField>[] = [
  {
    type: 'textArea',
    name: 'intolerance',
    fieldName: 'Intolerancias o alergias',
  },
  {
    type: 'textArea',
    name: 'least_favorite_food',
    fieldName: 'Alimentos que no gustan',
  },
  {
    type: 'textArea',
    name: 'favorite_food',
    fieldName: 'Alimentos que encantan',
  },
  {
    type: 'select',
    name: 'food_schedule',
    fieldName: 'Horario Aprox, de comidas',
    options: [
      {
        id: '1',
        name: '1',
      },
      {
        id: '2',
        name: '2',
      },
      {
        id: '3',
        name: '3',
      },
      {
        id: '4',
        name: '4',
      },
      {
        id: '5',
        name: '5',
      },
      {
        id: '6',
        name: '6',
      },
    ],

  },
  {
    type: 'textArea',
    name: 'getup_time',
    fieldName: 'Hora a la que te sueles levantar',
  },
  {
    type: 'textArea',
    name: 'bed_time',
    fieldName: 'Hora a la que te sueles acostar',
  },
  {
    type: 'textArea',
    name: 'job_description',
    fieldName: 'Descripción de tu trabajo',
  },
  {
    type: 'textArea',
    name: 'gym_time',
    fieldName: 'Hora a la que vas al GYM',
  },
  {
    type: 'textArea',
    name: 'training_duration',
    fieldName: 'Duración del ENTRENO',
  },
  {
    type: 'textArea',
    name: 'training_frecuency',
    fieldName: 'Días a la semana de Entreno',
  },
  {
    type: 'textArea',
    name: 'supplementation',
    fieldName: 'Suplementación ACTUAL (si usas)',
  },
  {
    type: 'textArea',
    name: 'current_food_habit',
    fieldName: 'Descríbeme lo que sueles comer actualmente un día cualquiera',
  },
];

export const relatedDataCofigs:FormConfig<RelatedDataField>[] = [
  {
    type: 'textArea',
    name: 'relatedData',
    fieldName: 'Datos que puedas creer que son de intereses relacionados con tu preparación',
  },
];

export const goalDataCofigs:FormConfig<GoalDataField>[] = [
  {
    type: 'textArea',
    name: 'goal',
    fieldName: 'Qué objetivo tienes',
  },
];
