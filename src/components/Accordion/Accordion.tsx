import React, { FC } from 'react';
import {
  Accordion as AccordionUI, AccordionDetails, AccordionSummary, Button, Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Props{
    title:string
    content:React.ReactNode
    defaultExpanded?:boolean
}

export const Accordion:FC<Props> = ({ title, content, defaultExpanded }) => (
  <AccordionUI defaultExpanded={defaultExpanded}>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      id={`${title}-accordion`}
    >
      <Typography variant="h6">{title}</Typography>
    </AccordionSummary>
    <AccordionDetails>
      {content}
    </AccordionDetails>
  </AccordionUI>
);
