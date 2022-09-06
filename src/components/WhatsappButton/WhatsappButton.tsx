import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useDeviceDetect } from 'hooks/useDeviceDetect';
import { FC } from 'react';
import { StyledWhatsappButton } from './WhatsappButton.styled';

interface Props {
    phoneNumber:string
}

export const WhatsappButton:FC<Props> = ({ phoneNumber }) => {
  const { isMobile } = useDeviceDetect();
  const whatsappBaseUrl = isMobile
    ? `whatsapp://send?phone=${phoneNumber}text=`
    : `https://web.whatsapp.com/send?phone=${phoneNumber}?text=`;
  const handleOnClick = () => {
    window.open(
      whatsappBaseUrl,
      '_blank',
      'popup=yes',
    );
  };
  return (
    <StyledWhatsappButton size="large" onClick={handleOnClick}>
      <WhatsAppIcon />
    </StyledWhatsappButton>
  );
};

//  href="//api.whatsapp.com/send?phone=91MOBILE_NUMBER&text=WHATEVER_LINK_OR_TEXT_YOU_WANT_TO_SEND"
