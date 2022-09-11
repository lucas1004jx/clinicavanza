import {
  Box, Button, Modal, Typography,
} from '@mui/material';
import { FormBuilder } from 'components/FormBuilder';
import { FC, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from 'utils/sendEmail';
import { StyledBox, StyledButtonWrapper } from './ContactButton.styled';
import { contactDataConfig } from './formConfigs';

const FORM_ID = 'form-contact';

export const ContactButton:FC = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { control, handleSubmit } = useForm();
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = (data:any) => {
    console.log('data--->', data);
    sendEmail(formRef);
  };
  return (
    <div>
      <Button onClick={handleOpen} variant="contained">Contactar</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-contact-button"
        aria-describedby="open-contact-form"
      >
        <StyledBox sx={{ boxShadow: 3 }}>
          <Typography variant="h4" component="h2" align="center" gutterBottom>
            Contáctanos!
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)} id={FORM_ID} ref={formRef}>
            <FormBuilder configs={contactDataConfig} control={control} />
          </form>
          <StyledButtonWrapper>
            <Button variant="outlined" onClick={handleClose}>Cancelar</Button>
            <Button type="submit" form={FORM_ID} variant="contained">Enviar</Button>
          </StyledButtonWrapper>

        </StyledBox>
      </Modal>
    </div>
  );
};
