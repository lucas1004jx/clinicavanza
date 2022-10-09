import { useRef, useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import { Accordion } from 'components/Accordion';
import { FormBuilder } from 'components/FormBuilder';
import { useForm } from 'react-hook-form';
import { sendEmail } from 'utils/sendEmail';
import { INITIAL_FORM_TEMPLATE_ID } from 'constants/email';
import { INITIAL_FORM_ID } from 'constants/form';
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
  const { control, handleSubmit, formState: { errors } } = useForm();
  const [isLoaidng, setIsLoading] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (data:any) => {
    try {
      console.log('data--->', data);
      setIsLoading(true);
      await sendEmail(formRef, INITIAL_FORM_TEMPLATE_ID);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error('sending initial form error', error);
    }
  };

  return (
    <StyledContainer>
      <form onSubmit={handleSubmit(onSubmit)} id={INITIAL_FORM_ID} ref={formRef}>
        <Accordion title="Datos personales" content={<FormBuilder configs={personalDataConfigs} control={control} errors={errors} />} defaultExpanded />
        <Accordion title="Datos personales" content={<FormBuilder configs={dietDataConfigs} control={control} errors={errors} />} />
        <Accordion title="Diario Intestinal" content={<FormBuilder configs={intestinalDataConfigs} control={control} errors={errors} />} />
        <Accordion title="Patología" content={<FormBuilder configs={pathologiesDataConfigs} control={control} errors={errors} />} />
        <Accordion title="Informationció nutricional, diaria" content={<FormBuilder configs={currentFoodHabitDataConfigs} control={control} errors={errors} />} />
        <Accordion title="Datos relacionados" content={<FormBuilder configs={relatedDataCofigs} control={control} errors={errors} />} />
        <Accordion title="Objectivo" content={<FormBuilder configs={goalDataCofigs} control={control} errors={errors} />} />
      </form>

      <StyledButtonWrapper>
        <LoadingButton
          loading={isLoaidng}
          loadingPosition="start"
          startIcon={<SendIcon />}
          type="submit"
          form={INITIAL_FORM_ID}
          variant="contained"
          onClick={() => console.log('asd')}
        >
          Enviar
        </LoadingButton>
      </StyledButtonWrapper>

    </StyledContainer>

  );
};
