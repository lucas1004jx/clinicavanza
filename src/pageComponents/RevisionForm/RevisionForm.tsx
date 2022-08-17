import { Button } from '@mui/material';
import { FormBuilder } from 'components/FormBuilder';
import { FormConfig } from 'components/FormBuilder/FormBuilder.model';
import { useForm } from 'react-hook-form';
import { StyledButtonWrapper, StyledContainer } from './RevisionForm.styled';

export const RevisionForm = () => {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data:any) => {
    console.log('data--->', data);
  };

  const personalDataconfigs:FormConfig[] = [
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

  return (
    <StyledContainer>
      <form onSubmit={handleSubmit(onSubmit)} id="my-form">
        <FormBuilder configs={personalDataconfigs} onSubmit={onSubmit} control={control} />
      </form>
      <StyledButtonWrapper>
        <Button type="submit" form="my-form" variant="contained">Submit</Button>
      </StyledButtonWrapper>
    </StyledContainer>

  );
};
