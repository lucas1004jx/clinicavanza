import { FormConfig } from 'components/FormBuilder/FormBuilder.model';

export const personalDataConfigs:FormConfig[] = [
  {
    type: 'input',
    name: 'nombre',
    fieldName: 'Nombre y appellido',
  },
  {
    type: 'input',
    name: 'edad',
    fieldName: 'Edad',
  },
  {
    type: 'input',
    name: 'pesoinicial',
    fieldName: 'Peso inicial(en ayunas)',
  },
  {
    type: 'input',
    name: 'altura',
    fieldName: 'Altura',
  },
  {
    type: 'input',
    name: 'groupsanguineo',
    fieldName: 'Group sanguíneo',
  },
  {
    type: 'input',
    name: 'email',
    fieldName: 'Email',
  },
  {
    type: 'input',
    name: 'telefono',
    fieldName: 'Teléfono',
  },
  {
    type: 'input',
    name: 'ciudad',
    fieldName: 'Ciudad y país',
  },
  {
    type: 'input',
    name: 'instagram',
    fieldName: 'Instagram',
  },
  {
    type: 'select',
    name: 'consentimiento',
    fieldName: 'Consentimiento a promocionar tu imagen en redes sociales.',
    options: [
      {
        id: 'si',
        name: 'sí',
      },
      {
        id: 'no',
        name: 'no',
      },
      {
        id: 'con identidad oculta',
        name: 'Sí, pero ocultando mi identidad',
      },
    ],
  },
];

export const pathologiesDataConfigs:FormConfig[] = [
  {
    type: 'textArea',
    name: 'allergy',
    fieldName: 'Alergias, enfermedades patológicas conocidas',
  },
];

export const habitDataConfigs:FormConfig[] = [
  {
    type: 'textArea',
    name: 'intolerance',
    fieldName: 'Intolerancias o alergias',
  },
  {
    type: 'textArea',
    name: 'leastFavoriteFood',
    fieldName: 'Alimentos que no gustan',
  },
  {
    type: 'textArea',
    name: 'favoriteFood',
    fieldName: 'Alimentos que encantan',
  },
  {
    type: 'select',
    name: 'foodSchedual',
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
    name: 'getUpTime',
    fieldName: 'Hora a la que te sueles levantar',
  },
  {
    type: 'textArea',
    name: 'bedTime',
    fieldName: 'Hora a la que te sueles acostar',
  },
  {
    type: 'textArea',
    name: 'jobDescription',
    fieldName: 'Descripción de tu trabajo',
  },
  {
    type: 'textArea',
    name: 'gymTime',
    fieldName: 'Hora a la que vas al GYM',
  },
  {
    type: 'textArea',
    name: 'trainingTime',
    fieldName: 'Duración del ENTRENO',
  },
  {
    type: 'textArea',
    name: 'trainingFrecuency',
    fieldName: 'Días a la semana de Entreno',
  },
  {
    type: 'textArea',
    name: 'supplementation',
    fieldName: 'Suplementación ACTUAL (si usas)',
  },
  {
    type: 'textArea',
    name: 'currentFoodHabit',
    fieldName: 'Descríbeme lo que sueles comer actualmente un día cualquiera',
  },
];

export const relatedDataCofigs:FormConfig[] = [
  {
    type: 'textArea',
    name: 'relatedData',
    fieldName: 'Datos que puedas creer que son de intereses relacionados con tu preparación',
  },
];

export const goalDataCofigs:FormConfig[] = [
  {
    type: 'textArea',
    name: 'goal',
    fieldName: 'Qué objetivo tienes',
  },
];
