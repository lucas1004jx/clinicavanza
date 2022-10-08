import emailjs from '@emailjs/browser';
import { PUBLIC_KEY, SERVICE_ID } from 'constants/email';
import { RefObject } from 'react';

export const sendEmail = async (formRef: RefObject<HTMLFormElement>, templateId:string) => {
  try {
    if (formRef.current) {
      const result = await emailjs.sendForm(SERVICE_ID, templateId, formRef.current, PUBLIC_KEY);
      console.log(result.text);
    }
    console.warn('No form element found');
  } catch (error:any) {
    console.error(error.text);
  }
};
