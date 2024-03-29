import {
  Dialog, Typography,
} from '@mui/material';
import { Card, Props as CardProps } from 'components/Card/Card';
import { FC, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { StyledDialogInner, StyledCloseIcon, StyledDialogTitle } from './LandingPage.styled';

interface Props extends Pick<CardProps,
    |'title'
    |'imgUrl'
    | 'alt'
    |'description'
>{
  actionText:string
  dialogTitle:string
  dialogContent?:JSX.Element
}

export const ServiceCard:FC<Props> = ({
  actionText, dialogTitle, dialogContent, ...props
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Dialog
        fullWidth
        open={open}
        onClose={handleClose}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <StyledDialogInner>
          <StyledDialogTitle id="dialog-title" variant="h6" gutterBottom>
            {dialogTitle}
          </StyledDialogTitle>
          {dialogContent}
          <StyledCloseIcon
            aria-label="close"
            onClick={handleClose}
          >
            <CloseIcon />
          </StyledCloseIcon>
        </StyledDialogInner>
      </Dialog>
      <Card
        {...props}
        primaryAction={{
          text: actionText,
          handler: handleOpen,
        }}
      />
    </>
  );
};
