import { Container } from '@material-ui/core';
import { FormBuilder } from 'components/FormBuilder';
import { FormConfig } from 'components/FormBuilder/FormBuilder.model';
import { StyledContainer } from './RevisionForm.styled';

export const RevisionForm = () => {
  const onSubmit = (data:any) => {
    console.log(data);
  };

  const configs:FormConfig[] = [{
    type: 'input',
    name: 'test input',
    label: 'label',
  }];

  return (
    <StyledContainer>
      <FormBuilder configs={configs} onSubmit={onSubmit} />
      <button type="submit" form="my-form">Submit</button>
    </StyledContainer>

  );
};
