import React, { useState } from 'react'
// import { styled } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
// import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIos';
import Typography from '@mui/material/Typography';
import faqData from './faqData';
import FAQAccordion from './FAQAccordion.js';


export default function FAQ() {

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <section id='faq' className='faq'>
      <h1 className='heading'> FAQ</h1>
      <div className='row'>

        <div className='image'>
          <img src='images/faq.png' alt='' />
        </div>
        <div className='accordion-container'>
          <div>
            {faqData.map((item) => (
          <FAQAccordion
            key={item.panel}
            expanded={expanded}
            handleChange={handleChange}
            {...item}
          />
        ))}
          </div>
        </div>

      </div>
    </section>
  )
}