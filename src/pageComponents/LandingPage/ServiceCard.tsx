import {
  Dialog, DialogContent, DialogTitle, Typography,
} from '@mui/material';
import { Card, Props as CardProps } from 'components/Card/Card';
import { FC, useState } from 'react';

interface Props extends Pick<CardProps,
    |'title'
    |'imgUrl'
    | 'alt'
    |'description'
>{
  actionText:string
  dialogTitle:string
  dialogText?:string
  dialogContent?:JSX.Element
}

export const ServiceCard:FC<Props> = ({
  actionText, dialogTitle, dialogContent, dialogText, ...props
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle id="dialog-title">
          {dialogTitle}
        </DialogTitle>
        {dialogContent || (
        <DialogContent>
          <Typography id="dialog-description">
            {dialogContent}
          </Typography>
        </DialogContent>
        )}
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
