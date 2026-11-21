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
          sx={{ "& .MuiAccordionSummary-content":{display: 'flex', alignItems: 'center',flexDirection:"row" }}}
        >
          <AccountTreeRounded/>
          <Typography sx={{mx:2,borderRadius:2, flex:1,p:2, background:" #efefef"}} component="span">Accordion 1</Typography>
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
