import { useRef } from 'react';
import {
  Button,
} from '@mui/material';
import emailjs from '@emailjs/browser';
import { Accordion } from 'components/Accordion';

import { FormBuilder } from 'components/FormBuilder';
import { useForm } from 'react-hook-form';
import { sendEmail } from 'utils/sendEmail';
import {
  goalDataCofigs,
  habitDataConfigs, pathologiesDataConfigs, personalDataConfigs, relatedDataCofigs,
} from './formConfigs';
import { StyledButtonWrapper, StyledContainer } from './RevisionForm.styled';

export const RevisionForm = () => {
  const { control, handleSubmit } = useForm();

  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = (data:any) => {
    console.log('data--->', data);
    sendEmail(formRef);
  };

  return (
    <StyledContainer>
      <form onSubmit={handleSubmit(onSubmit)} id="my-form" ref={formRef}>
        <Accordion title="Datos personales" content={<FormBuilder configs={personalDataConfigs} control={control} />} defaultExpanded />
        <Accordion title="Patología" content={<FormBuilder configs={pathologiesDataConfigs} control={control} />} />
        <Accordion title="Informationció nutricional, diaria" content={<FormBuilder configs={habitDataConfigs} control={control} />} />
        <Accordion title="Objectivo" content={<FormBuilder configs={goalDataCofigs} control={control} />} />
      </form>

      <StyledButtonWrapper>
        <Button type="submit" form="my-form" variant="contained">Submit</Button>
      </StyledButtonWrapper>
    </StyledContainer>

  );
};
