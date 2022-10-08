import {
  Button, Modal, Typography,
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import { FormBuilder } from 'components/FormBuilder';
import { CONTACT_FORM_TEMPLATE_ID } from 'constants/email';
import { ComponentPropsBase } from 'models/baseProps.model';
import { FC, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from 'utils/sendEmail';
import { StyledBox, StyledButtonWrapper } from './ContactButton.styled';
import { contactDataConfig } from './formConfigs';

const FORM_ID = 'form-contact';

export const ContactButton:FC<ComponentPropsBase> = ({ className }) => {
  const [open, setOpen] = useState(false);
  const [isLoaidng, setIsLoading] = useState(false);

  const {
    control, handleSubmit, formState: { errors }, reset,
  } = useForm();
  const formRef = useRef<HTMLFormElement>(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    reset({});
    setOpen(false);
  };

  const onSubmit = async () => {
    try {
      setIsLoading(true);
      await sendEmail(formRef, CONTACT_FORM_TEMPLATE_ID);
      handleClose();
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error('sending contact foprm error', error);
    }
  };
  return (
    <div className={className}>
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
            <FormBuilder configs={contactDataConfig} control={control} errors={errors} />
          </form>
          <StyledButtonWrapper>
            <Button variant="outlined" onClick={handleClose}>Cancelar</Button>
            <LoadingButton
              loading={isLoaidng}
              loadingPosition="start"
              startIcon={<SendIcon />}
              type="submit"
              form={FORM_ID}
              variant="contained"
            >
              Enviar
            </LoadingButton>
          </StyledButtonWrapper>

        </StyledBox>
      </Modal>
    </div>
  );
};
