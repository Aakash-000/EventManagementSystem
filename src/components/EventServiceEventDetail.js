import React,{useState} from 'react'
import { TextField, FormControl, InputLabel, Select, MenuItem, Checkbox, ListItemText, Grid, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import styled from '@emotion/styled';

const arrayofeventdetail = {

  "PersonalProgram":
  ["Event Hall with Dining",
  "Multiple Rooms with Spa Pool(B:L:D)",
  "Bbq and Dance Live Event",
  "Parking Space and Security",
  "Green Environment",
  "Sport Hall and Games"],
  "FamilyFunction":[
  "Event Hall and Mandap",
  "Launch Snacks Beverages",
  "Dancing Space and Sound System",
  "Green Environment",
  "Parking Space and Security"
  ],"ProfessionalEvent":[
  "Necessary Digital Systems",
  "Launch Snacks Beverages",
  "Parking Space and Security",
  "Vibrant and Audible Hall"
  ]

} 

const theme = createTheme({
    components:{
        MuiInputLabel:{
        styleOverrides: {
          root: {
            fontSize:'13px',
            fontFamily:'Roboto, Helvetica, sans-serif',
            paddingTop:'3px'
          },
        },
      },
      MuiInputBase:{
        styleOverrides: {
          root: {
            fontSize:'14px',
            fontFamily:'Roboto, Helvetica, sans-serif'
          },
        },
      },MuiTypography:{
        styleOverrides:{
          root:{
            fontSize:'14px'
          }
        }
      },MuiSvgIcon:{
        styleOverrides:{
          root:{
            fontSize:'20px'
          }
        }
      }
    }
  });
  
  const UpperSectionWrapper = styled('div')({
    display:'flex',
    flexDirection:'column',
    gap:'10px',
    marginTop:'15px'
  }) 

function EventServiceEventDetail() {
    const [textValues, setTextValues] = useState({});
    const [dropdownValues, setDropdownValues] = useState({});

    const handleTextChange = (event) => {
        setTextValues((prevValues) => ({
          ...prevValues,
          [event.target.name]: event.target.value,
        }));
      };
    
      const handleDropdownChange = (event) => {
        setDropdownValues((prevValues) => ({
          ...prevValues,
          [event.target.name]: event.target.value,
        }));
      };

      
  return (
    <UpperSectionWrapper>
    <Typography variant='body2' sx={{fontFamily:'IBM Plex Sans, sans-serif',fontWeight:'600'}}>
      <li sx={{padding:'0px'}}>Add Event Detail</li></Typography>
     <Grid container spacing={1}>
     <Grid item xs={2}>
    <ThemeProvider theme={theme}>
    <TextField
      label="Capacity(In Person)"
      name="textField1"
      value={textValues.textField1 || ''}
      onChange={handleTextChange}
      fullWidth
      margin="normal"
    />
    </ThemeProvider>
    </Grid>
    <Grid item xs={2}>
    <ThemeProvider theme={theme}>
    <TextField
      label="Available Rooms"
      name="textField2"
      value={textValues.textField2 || ''}
      onChange={handleTextChange}
      fullWidth
      margin="normal"
    />
    </ThemeProvider>
    </Grid>
    <Grid item xs={2}>
    <ThemeProvider theme={theme}>
    <FormControl fullWidth margin="normal">
      <InputLabel id="dropdown0-label" sx={{fontSize:'13px',paddingLeft:'4px',backgroundColor:'#fff',width:'83px',
        fontFamily:'Roboto, Helvetica, sans-serif',paddingTop:'3px'}}>Event Types</InputLabel>
      <Select
        labelId="dropdown1-label"
        id="dropdown0"
        name="0"
        multiple
        value={dropdownValues[0] || []}
        onChange={handleDropdownChange}
        renderValue={(selected) => selected.join(', ')}
      >
        <MenuItem value="PersonalProgram">
          <Checkbox checked={dropdownValues[0]?.includes('PersonalProgram')} />
          <ListItemText primary="Personal Program" />
        </MenuItem>
        <MenuItem value="FamilyFunction">
          <Checkbox checked={dropdownValues[0]?.includes('FamilyFunction')} />
          <ListItemText primary="Family Function" />
        </MenuItem>
        <MenuItem value="ProfessionalEvent">
          <Checkbox checked={dropdownValues[0]?.includes('ProfessionalEvent')} />
          <ListItemText primary="Professional Event" />
        </MenuItem>
      </Select>
    </FormControl>
    </ThemeProvider>
    </Grid>
    <ThemeProvider theme={theme}>
  {dropdownValues[0]?.map((item,index)=>
  ( 
    <Grid item xs={2}>
    <FormControl fullWidth margin="normal">
      <InputLabel id={`dropdown${index+1}-label`}
      sx={{fontSize:'13px',backgroundColor:'#fff',width:'140px',paddingLeft:'4px',
      fontFamily:'Roboto, Helvetica, sans-serif',paddingTop:'3px'}}>For {item}</InputLabel>
        <Select
        id={`dropdown${index+1}`}
        name={`${index+1}`}
        multiple
        value={dropdownValues[index+1] || []}
        onChange={handleDropdownChange}
        renderValue={(selected) => selected.join(', ')}
        >
        {item == "PersonalProgram" ? ( 
          arrayofeventdetail.PersonalProgram.map((item)=>( 
        <MenuItem value={`${item}`}>
          <Checkbox checked={dropdownValues[index+1]?.includes(`${item}`)} />
          <ListItemText primary={`${item}`} />
        </MenuItem> )))
         : item == "FamilyFunction" ? (
          arrayofeventdetail.FamilyFunction.map((item)=>( 
            <MenuItem value={`${item}`}>
          <Checkbox checked={dropdownValues[index+2]?.includes(`${item}`)} />
          <ListItemText primary={`${item}`} />
        </MenuItem> ))): 
        item == "ProfessionalEvent" && (
          arrayofeventdetail.ProfessionalEvent.map((item)=>( 
            <MenuItem value={`${item}`}>
          <Checkbox checked={dropdownValues[index+3]?.includes(`${item}`)} />
          <ListItemText primary={`${item}`} />
        </MenuItem> ))
        )
         }
      </Select>
    </FormControl>
    </Grid>))}
    </ThemeProvider>
    </Grid>
    </UpperSectionWrapper>
  )
}

export default EventServiceEventDetail