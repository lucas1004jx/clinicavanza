import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useDeviceDetect } from 'hooks/useDeviceDetect';
import { FC } from 'react';
import { StyledWhatsappButton } from './WhatsappButton.styled';

interface Props {
    phoneNumber:string
}

export const WhatsappButton:FC<Props> = ({ phoneNumber }) => {
  const { isMobile } = useDeviceDetect();
  const whatsappBaseUrl = `https://api.whatsapp.com/send?phone=34${phoneNumber}`;
  const handleOnClick = () => {
    window.open(
      whatsappBaseUrl,
      '_blank',
      'popup=no',
    );
  };
  return (
    <StyledWhatsappButton size="large" onClick={handleOnClick}>
      <WhatsAppIcon />
    </StyledWhatsappButton>
  );
};
