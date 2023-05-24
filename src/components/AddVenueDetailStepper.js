
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, ThemeProvider, createTheme } from '@mui/material';
import VenueDetailImgDesc from './VenueDetailImgDesc';
import EventServiceStepper from './EventServiceStepper';
import EventPriceDetail from './EventPriceDetail';

const steps = ['Image and Description', 'Event Type and Services', 'Pricing'];

const themeforbackbtn = createTheme({
  components:{
    MuiButton:{
      styleOverrides:{
        root:{
          backgroundColor: '#384E77', /* Update the button background color */
          color: '#E6F9AF',
          fontFamily:'Roboto,Monserrat,sans-serif',
          fontWeight:'500', /* Set the text color to white */
          '&:hover':{
          backgroundColor:'#384E77', /* Update the button background color on hover */
          color:'#E6F9AF'
          }
        }
      }
    }
  }
});



export default function AddVenueDetailStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Container maxWidth={'lg'} sx={{marginTop:'50px'}}>
    <Box sx={{ width: '100%' }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" disableRipple onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button disableRipple onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
              {activeStep == 0 ? <VenueDetailImgDesc/>
               : activeStep == 1 ? <EventServiceStepper/>  
               :   <EventPriceDetail/>} 
            </Typography>
            <Container sx={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <ThemeProvider theme={themeforbackbtn}>
              <Button
                disabled={activeStep === 0}
                disableRipple
                onClick={handleBack}
                sx={{ mr: 1 , fontWeight:'550',
                borderRadius:'20px',backgroundColor: activeStep === 0 && 'ButtonShadow',
                cursor: activeStep == 0 && 'not-allowed'}}
              >
                Back
              </Button>
              </ThemeProvider>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button disableRipple 
              disabled={activeStep == 2 && true}
              onClick={handleNext} sx={{ mr: 1,
              ":hover":{backgroundColor: 'rgba(0, 0, 0, 0.38)',color:'#f9f7ec'},fontWeight:'550',
                backgroundColor: activeStep == 2 ? 'ButtonShadow' : 'rgba(0, 0, 0, 0.38)',color:'#f9f7ec',
                borderRadius:'20px'}}>
                Next
              </Button>
              </Box>
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography variant="caption" sx={{ display: 'inline-block' }}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button disableRipple 
                  sx={{":hover":{backgroundColor: 'rgba(0, 0, 0, 0.03)',color:'#001'},
                  fontWeight:'550',
                  backgroundColor: 'rgba(0, 0, 0, 0.03)',color:'#001',borderRadius:'20px'}}
                  onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1
                      ? 'Finish'
                      : 'Complete Step'}
                  </Button>
                ))}
            </Container>
          </React.Fragment>
        )}
      </div>
    </Box>
    </Container>
  );
}