import emailjs from '@emailjs/browser';
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from 'constants/email';
import { RefObject } from 'react';

export const sendEmail = async (formRef: RefObject<HTMLFormElement>) => {
  try {
    if (formRef.current) {
      const result = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      console.log(result.text);
    }
    console.warn('No form element found');
  } catch (error:any) {
    console.error(error.text);
  }
};
