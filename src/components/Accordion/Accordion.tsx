import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from '@mui/material';
import { AccountTreeRounded } from '@mui/icons-material';
 
export default function AccordionUsage() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <AccountTreeRounded/>
          <Typography sx={{ml:2}} component="span">Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography  component="span">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography> 
        </AccordionDetails>
        <AccordionActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn more</Button>
        </AccordionActions>
      </Accordion>        
    </div>
  );
}
