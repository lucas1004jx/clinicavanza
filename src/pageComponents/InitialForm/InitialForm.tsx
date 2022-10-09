import { useRef, useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import { Accordion } from 'components/Accordion';
import { FormBuilder } from 'components/FormBuilder';
import { useForm } from 'react-hook-form';
import { sendEmail } from 'utils/sendEmail';
import { INITIAL_FORM_TEMPLATE_ID } from 'constants/email';
import { INITIAL_FORM_ID } from 'constants/form';
import { useRouter } from 'next/router';
import { scrollIntoView } from 'utils/scrollInntoView';
import {
  goalDataCofigs,
  currentFoodHabitDataConfigs,
  pathologiesDataConfigs,
  personalDataConfigs,
  relatedDataCofigs,
  intestinalDataConfigs,
  dietDataConfigs,
} from './formConfigs';
import { StyledButtonWrapper, StyledContainer } from './InitialForm.styled';

export const InitialForm = () => {
  const router = useRouter();
  const { control, handleSubmit, formState: { errors } } = useForm();
  const [isLoaidng, setIsLoading] = useState(false);

  const [personalDataExpanded, setPersonalDataExpanded] = useState(true);
  const [dietDataExpanded, setDietDataExpanded] = useState(false);
  const [intestinalDataExpanded, setIntestinalDataExpanded] = useState(false);
  const [pathologiesDataExpanded, setPathologiesDataExpanded] = useState(false);
  const [currentFoodHabitDataExpanded, setCurrentFoodHabitDataExpanded] = useState(false);
  const [relatedDataExpanded, setRelatedDataExpanded] = useState(false);
  const [goalDataExpanded, setGoalDataDataExpanded] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (data:any) => {
    try {
      setIsLoading(true);
      await sendEmail(formRef, INITIAL_FORM_TEMPLATE_ID);
      setIsLoading(false);
      router.push('/');
    } catch (error) {
      setIsLoading(false);
      console.error('sending initial form error', error);
    }
  };

  const onSubmitFailed = (errorsObj:any) => {
    const hasPersonaDataError = !!personalDataConfigs.find((field) => errorsObj[field.name]);
    if (hasPersonaDataError) {
      scrollIntoView('personalData');
      setPersonalDataExpanded(true);
      return;
    }

    const hasDietDataError = !!dietDataConfigs.find((field) => errorsObj[field.name]);
    if (hasDietDataError) {
      scrollIntoView('dietData');
      setDietDataExpanded(true);
      return;
    }

    const hasIntestialDataError = !!intestinalDataConfigs.find((field) => errorsObj[field.name]);
    if (hasIntestialDataError) {
      scrollIntoView('intestinalData');
      setIntestinalDataExpanded(true);
      return;
    }

    const hasPathologiesDataError = !!pathologiesDataConfigs.find((field) => errorsObj[field.name]);
    if (hasPathologiesDataError) {
      scrollIntoView('pathologiesData');
      setPathologiesDataExpanded(true);
      return;
    }

    const hasCurrentFoodHabitDataError = !!currentFoodHabitDataConfigs.find((field) => errorsObj[field.name]);
    if (hasCurrentFoodHabitDataError) {
      scrollIntoView('currentFoodHabitData');
      setCurrentFoodHabitDataExpanded(true);
      return;
    }

    const hasRelatedDataError = !!relatedDataCofigs.find((field) => errorsObj[field.name]);
    if (hasRelatedDataError) {
      scrollIntoView('relatedData');
      setRelatedDataExpanded(true);
      return;
    }

    const hasGoalDataDataError = !!goalDataCofigs.find((field) => errorsObj[field.name]);
    if (hasGoalDataDataError) {
      scrollIntoView('goalData');
      setGoalDataDataExpanded(true);
    }
  };

  return (
    <StyledContainer>
      <form onSubmit={handleSubmit(onSubmit, onSubmitFailed)} id={INITIAL_FORM_ID} ref={formRef}>
        <Accordion title="Datos personales" content={<FormBuilder configs={personalDataConfigs} control={control} errors={errors} />} defaultExpanded={personalDataExpanded} id="personalData" />

        <Accordion title="Diario dietetico" content={<FormBuilder configs={dietDataConfigs} control={control} errors={errors} />} id="dietData" defaultExpanded={dietDataExpanded} />

        <Accordion title="Diario Intestinal" content={<FormBuilder configs={intestinalDataConfigs} control={control} errors={errors} />} id="intestinalData" defaultExpanded={intestinalDataExpanded} />

        <Accordion title="Patología" content={<FormBuilder configs={pathologiesDataConfigs} control={control} errors={errors} />} id="pathologiesData" defaultExpanded={pathologiesDataExpanded} />

        <Accordion title="Informationció nutricional, diaria" content={<FormBuilder configs={currentFoodHabitDataConfigs} control={control} errors={errors} />} id="currentFoodHabitData" defaultExpanded={currentFoodHabitDataExpanded} />

        <Accordion title="Datos relacionados" content={<FormBuilder configs={relatedDataCofigs} control={control} errors={errors} />} id="relatedData" defaultExpanded={relatedDataExpanded} />

        <Accordion title="Objectivo" content={<FormBuilder configs={goalDataCofigs} control={control} errors={errors} />} id="goalData" defaultExpanded={goalDataExpanded} />
      </form>

      <StyledButtonWrapper>
        <LoadingButton
          loading={isLoaidng}
          loadingPosition="start"
          startIcon={<SendIcon />}
          type="submit"
          form={INITIAL_FORM_ID}
          variant="contained"
        >
          Enviar
        </LoadingButton>
      </StyledButtonWrapper>

    </StyledContainer>

  );
};
