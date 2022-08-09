import { FormBuilder } from 'components/FormBuilder';
import { FormConfig } from 'components/FormBuilder/FormBuilder.model';

export const RevisionForm = () => {
  const onSubmit = (data:any) => {
    console.log(data);
  };

  const configs:FormConfig[] = [{
    type: 'input',
    name: 'test input',
  }];

  return (
    <>
      <FormBuilder configs={configs} onSubmit={onSubmit} />
      <button type="submit" form="my-form">Submit</button>
    </>

  );
};
