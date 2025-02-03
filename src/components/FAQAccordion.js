import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

export default function FAQAccordion({ panel, question, answer, expanded, handleChange }) {
  return (
    <Accordion className="accordion" expanded={expanded === panel} onChange={handleChange(panel)}>
      <AccordionSummary className="accordion-summary">
        <Typography>
          <span>{expanded === panel ? '-' : '+'} {question}</span>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography className="accordion-body">{answer}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}

