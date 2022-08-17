import { Button } from '@material-ui/core';
import { FormBuilder } from 'components/FormBuilder';
import { FormConfig } from 'components/FormBuilder/FormBuilder.model';
import { StyledButtonWrapper, StyledContainer } from './RevisionForm.styled';

export const RevisionForm = () => {
  const onSubmit = (data:any) => {
    console.log(data);
  };

  const configs:FormConfig[] = [
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
      <FormBuilder configs={configs} onSubmit={onSubmit} />
      <StyledButtonWrapper>
        <Button type="submit" form="my-form" variant="contained">Submit</Button>
      </StyledButtonWrapper>
    </StyledContainer>

  );
};
