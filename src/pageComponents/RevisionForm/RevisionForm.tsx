import { Button, Typography } from '@mui/material';
import { FormBuilder } from 'components/FormBuilder';
import { FormConfig } from 'components/FormBuilder/FormBuilder.model';
import { useForm } from 'react-hook-form';
import {
  goalDataCofigs,
  habitDataConfigs, pathologiesDataConfigs, personalDataConfigs, relatedDataCofigs,
} from './formConfigs';
import { StyledButtonWrapper, StyledContainer } from './RevisionForm.styled';

export const RevisionForm = () => {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data:any) => {
    console.log('data--->', data);
  };

  return (
    <StyledContainer>
      <form onSubmit={handleSubmit(onSubmit)} id="my-form">
        <FormBuilder configs={personalDataConfigs} control={control} />
        <Typography>PATOLOGÍAS</Typography>
        <FormBuilder configs={pathologiesDataConfigs} control={control} />
        <FormBuilder configs={habitDataConfigs} control={control} />
        <FormBuilder configs={relatedDataCofigs} control={control} />
        <FormBuilder configs={goalDataCofigs} control={control} />
      </form>
      <StyledButtonWrapper>
        <Button type="submit" form="my-form" variant="contained">Submit</Button>
      </StyledButtonWrapper>
    </StyledContainer>

  );
};
