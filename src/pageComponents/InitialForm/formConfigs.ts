import { FormConfig } from 'components/FormBuilder/FormBuilder.model';
import { YES_NO_OPTION } from 'constants/form';
import {
  CurrentFoodHabitDataField,
  DietDataField,
  GoalDataField,
  IntestinalDataField,
  PathologiesDataField,
  PersonalDataField,
  RelatedDataField,
} from 'models/form.model';

export const personalDataConfigs:FormConfig<PersonalDataField>[] = [
  {
    type: 'input',
    name: 'user_name',
    fieldName: 'Nombre y appellido',
    rules: { required: true },
  },
  {
    type: 'input',
    name: 'age',
    fieldName: 'Edad',
    rules: { required: true },
  },
  {
    type: 'input',
    name: 'initial_weight',
    fieldName: 'Peso inicial(en ayunas)',
    rules: { required: true },
  },
  {
    type: 'input',
    name: 'height',
    fieldName: 'Altura',
    rules: { required: true },
  },
  {
    type: 'input',
    name: 'email',
    fieldName: 'Email',
    rules: { required: true },
  },
  {
    type: 'input',
    name: 'phone_number',
    fieldName: 'Teléfono',
    rules: { required: true },
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
    fieldName: 'Rodea para dar tu consentimiento a promocionar tu imagen en RRSS o no',
    options: [
      ...YES_NO_OPTION,
      {
        id: 'Sí, pero ocultando mi identidad',
        name: 'Sí, pero ocultando mi identidad',
      },
    ],
    rules: { required: true },
  },
];

export const DietDataConfigs:FormConfig<DietDataField>[] = [
  {
    type: 'textArea',
    name: 'intolerance',
    fieldName: 'Intolerancias o alergias',
    rules: { required: true },
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
    rules: { required: true },
  },
  {
    type: 'textArea',
    name: 'job_description',
    fieldName: 'Descripción de tu trabajo',
    rules: { required: true },
  },
  {
    type: 'textArea',
    name: 'gym_time',
    fieldName: 'Hora a la que vas al GYM',
    rules: { required: true },
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
    rules: { required: true },
  },
  {
    type: 'textArea',
    name: 'supplementation',
    fieldName: 'Suplementación ACTUAL (si usas)',
  },
];

export const IntestinalDataConfig :FormConfig<IntestinalDataField>[] = [
  {
    type: 'select',
    name: 'haveConstipation',
    fieldName: 'Estreñimiento o tiene q hacer esfuerzos para defecar o episodios de diarrea',
    options: YES_NO_OPTION,
    rules: { required: true },
  },
  {
    type: 'select',
    name: 'haveFecesOdor',
    fieldName: 'olor muy fuerte en sus heces,  ¿ flotan',
    options: YES_NO_OPTION,
  },
  {
    type: 'select',
    name: 'haveDigestionProblem',
    fieldName: '¿Tiene digestiones lentas o se hincha despues de comer o tiene gases? ',
    options: YES_NO_OPTION,
    rules: { required: true },
  },
  {
    type: 'select',
    name: 'haveGastritis',
    fieldName: '¿Tiene gastritis ó reflujo o necesita tomar antiácidos (omeoprazol…raditidina)? ',
    options: YES_NO_OPTION,
    rules: { required: true },
  },
  {
    type: 'select',
    name: 'haveIntestinalPain',
    fieldName: '¿Sufre dolor abdominal ,o intestinal o suele tener gases?',
    options: YES_NO_OPTION,
    rules: { required: true },
  },
  {
    type: 'select',
    name: 'havePeriodPain',
    fieldName: '¿Dolor menstural o menstruacion irregular?',
    options: YES_NO_OPTION,

  },
  {
    type: 'select',
    name: 'isChilySentitive',
    fieldName: '¿Es friolero, cabello fragil o piel resca?',
    options: YES_NO_OPTION,
  },
  {
    type: 'select',
    name: 'haveLiquidRetention',
    fieldName: '¿Nota retencion de liquidos o cara / manos hinchadas por las mañanas?',
    options: YES_NO_OPTION,
  },

  {
    type: 'select',
    name: 'haveNausea',
    fieldName: '¿Tiene regularmente mareos o nauseas?',
    options: YES_NO_OPTION,
    rules: { required: true },
  },
  {
    type: 'select',
    name: 'haveSleepProblem',
    fieldName: '¿Tiene problemas de sueño, se despierta de madruagada , duerme poco o le cuesta dormirse?',
    options: YES_NO_OPTION,

  },
  {
    type: 'select',
    name: 'isTiredGetup',
    fieldName: '¿Te levantas cansado? se nota con poca energía durante el dia?',
    options: YES_NO_OPTION,

  },
  {
    type: 'select',
    name: 'haveProcessedFoodDaily',
    fieldName: '¿Consume procesados a diario?',
    options: YES_NO_OPTION,
    rules: { required: true },
  },
  {
    type: 'select',
    name: 'haveCramps',
    fieldName: '¿Suele tener calambres , agujetas o tendinitis?',
    options: YES_NO_OPTION,
  },
  {
    type: 'select',
    name: 'haveBellyFat',
    fieldName: '¿Tiene grasa localizada en el abdomen dificil de perder?',
    options: YES_NO_OPTION,
  },
  {
    type: 'select',
    name: 'canTellHungerOrAnxiety',
    fieldName: '¿Sabe diferenciar el hambre de la ansiedad?',
    options: YES_NO_OPTION,
    rules: { required: true },
  },
  {
    type: 'select',
    name: 'haveHeadacheAfterMeal',
    fieldName: '¿Tiene dolores de cabeza despues de comer?',
    options: YES_NO_OPTION,
  },
  {
    type: 'select',
    name: 'haveNeedOfSweet',
    fieldName: '¿Tiene la necesidad de productos azucarados?',
    options: YES_NO_OPTION,
  },
  {
    type: 'select',
    name: 'eatForBoring',
    fieldName: '¿Cree q come por aburrimiento?',
    options: YES_NO_OPTION,
  },
  {
    type: 'select',
    name: 'isHungryEvery3Hours',
    fieldName: '¿Tiene hambre cada 3 horas?',
    options: YES_NO_OPTION,
    rules: { required: true },
  },
  {
    type: 'select',
    name: 'takeMedication',
    fieldName: '¿Tomas alguna medicación?',
    options: YES_NO_OPTION,
  },
];

export const pathologiesDataConfigs:FormConfig<PathologiesDataField>[] = [
  {
    type: 'textArea',
    name: 'allergy',
    fieldName: 'Alergias, enfermedades patológicas conocidas',
    rules: { required: true },
  },
];

export const currentFoodHabitDataConfigs:FormConfig<CurrentFoodHabitDataField>[] = [
  {
    type: 'textArea',
    name: 'current_food_habit',
    fieldName: 'Descríbeme lo que sueles comer actualmente un día cualquiera',
    rules: { required: true },
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
    rules: { required: true },
  },
];
