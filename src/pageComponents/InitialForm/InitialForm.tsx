import { useRef } from 'react';
import {
  Button,
} from '@mui/material';
import { Accordion } from 'components/Accordion';

import { FormBuilder } from 'components/FormBuilder';
import { useForm } from 'react-hook-form';
import { sendEmail } from 'utils/sendEmail';
import { INITIAL_FORM_TEMPLATE_ID } from 'constants/email';
import {
  goalDataCofigs,
  currentFoodHabitDataConfigs, pathologiesDataConfigs, personalDataConfigs, relatedDataCofigs,
} from './formConfigs';
import { StyledButtonWrapper, StyledContainer } from './InitialForm.styled';

export const InitialForm = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = (data:any) => {
    console.log('data--->', data);
    sendEmail(formRef, INITIAL_FORM_TEMPLATE_ID);
  };

  return (
    <StyledContainer>
      <form onSubmit={handleSubmit(onSubmit)} id="my-form" ref={formRef}>
        <Accordion title="Datos personales" content={<FormBuilder configs={personalDataConfigs} control={control} errors={errors} />} defaultExpanded />
        <Accordion title="Patología" content={<FormBuilder configs={pathologiesDataConfigs} control={control} errors={errors} />} />
        <Accordion title="Informationció nutricional, diaria" content={<FormBuilder configs={currentFoodHabitDataConfigs} control={control} errors={errors} />} />
        <Accordion title="Datos relacionados" content={<FormBuilder configs={relatedDataCofigs} control={control} errors={errors} />} />
        <Accordion title="Objectivo" content={<FormBuilder configs={goalDataCofigs} control={control} errors={errors} />} />
      </form>

      <StyledButtonWrapper>
        <Button type="submit" form="my-form" variant="contained">Submit</Button>
      </StyledButtonWrapper>
    </StyledContainer>

  );
};
