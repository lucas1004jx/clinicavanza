import React, { FC, useEffect, useState } from 'react';
import {
  Accordion as AccordionUI, AccordionDetails, AccordionSummary, Button, Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Props{
    id?:string
    title:string
    content:React.ReactNode
    defaultExpanded?:boolean
}

export const Accordion:FC<Props> = ({
  title, content, defaultExpanded, id,
}) => {
  const [expaned, setExpaned] = useState(defaultExpanded);

  useEffect(() => {
    setExpaned(defaultExpanded);
  }, [defaultExpanded]);

  const toggleExpanded = () => setExpaned((prev) => !prev);

  return (
    <AccordionUI expanded={expaned} id={id} onChange={toggleExpanded}>
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
};
