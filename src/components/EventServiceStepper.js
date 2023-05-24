import React from 'react';
import{ Container } from '@mui/material';
import EventServiceEventDetail from './EventServiceEventDetail';
import { EventServiceRecipeDetail } from './EventServiceRecipeDetail';


const EventServiceStepper = () => {
  
  return (
      <Container maxWidth={'xl'} sx={{display:'flex',flexDirection:'column',gap:'20px',marginTop:'10px'}}>
      <EventServiceEventDetail/>
      <hr/>
      <EventServiceRecipeDetail/>
      </Container>
    
  );
};

export default EventServiceStepper;
