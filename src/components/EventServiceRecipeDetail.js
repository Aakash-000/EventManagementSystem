import React,{useState} from 'react'
import { FormControl, InputLabel, Select, MenuItem, Checkbox, ListItemText, Grid, Typography} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import styled from '@emotion/styled';

const arrayofrecipedetail = {
    "PersonalProgram":[
        "Mashed Potato Chilly",
        "Beans Pickle Chilly",
        "Potato Ball","Samosa Chat",
        "Paneer Chilly","Fried Veg Curry",
        "With Drinks(Soft Hard)",
        "Candle Night Special","Fruit Salad",
        "Barbq and Drinks",
        "Momo and Pizza",
        "Fish Curry Chilly",
        "Drumstick and Prawn",
        "Biryani Steamed",
        "Candle Night Special",
        "Thakali Set","Soup Items","Sweet Items"
      ]
    ,"FamilyFunction":[
        "Mashed Potato Chilly",
        "Beans Pickle Chilly",
        "Potato Ball","Samosa Chat",
        "Paneer Chilly","Fried Veg Curry",
        "Barbq and Drinks",
        "Momo and Pizza",
        "Fish Curry Chilly",
        "Drumstick and Prawn",
        "Dinner Set",
        "Fruit Salad",
        "Cake","Soup Items",
        "Sweet Items"
    ]
    ,"ProfessionalEvent":[
        "Cake",
        "Mashed Potato Chilly",
        "Beans Pickle Chilly",
        "Potato Ball","Samosa Chat",
        "Paneer Chilly","Fried Veg Curry",
        "Barbq and Drinks",
        "Momo and Pizza",
        "Fish Curry Chilly",
        "Drumstick and Prawn",
        "Dinner Set",
        "Fruit Salad",
        "Thakali Set","Soup Items","SweetItems"
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
  
  const LowerSectionWrapper = styled('div')({
    display:'flex',
    flexDirection:'column',
    gap:'10px',
    marginTop:'5px'
  })

export function EventServiceRecipeDetail(){

    
    const [dropdownValues, setDropdownValues] = useState({});

      const handleDropdownChange = (event) => {
        setDropdownValues((prevValues) => ({
          ...prevValues,
          [event.target.name]: event.target.value,
        }));
      };

      return(
      <LowerSectionWrapper>
      <Typography variant='body2' sx={{fontFamily:'IBM Plex Sans, sans-serif',fontWeight:'600'}}>
      <li sx={{padding:'0px'}}>Add Recipe Detail</li></Typography>
      <Grid container spacing={1}>
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
        fontFamily:'Roboto, Helvetica, sans-serif',paddingTop:'3px'}}>Recipe for {item}</InputLabel>
          <Select
          id={`dropdown${index+1}`}
          name={`${index+1}`}
          multiple
          value={dropdownValues[index+1] || []}
          onChange={handleDropdownChange}
          renderValue={(selected) => selected.join(', ')}
          >
          {item == "PersonalProgram" ? ( 
            arrayofrecipedetail.PersonalProgram.map((item)=>( 
          <MenuItem value={`${item}`}>
            <Checkbox checked={dropdownValues[index+1]?.includes(`${item}`)} />
            <ListItemText primary={`${item}`} />
          </MenuItem> )))
           : item == "FamilyFunction" ? (
            arrayofrecipedetail.FamilyFunction.map((item)=>( 
              <MenuItem value={`${item}`}>
            <Checkbox checked={dropdownValues[index+2]?.includes(`${item}`)} />
            <ListItemText primary={`${item}`} />
          </MenuItem> ))): 
          item == "ProfessionalEvent" && (
            arrayofrecipedetail.ProfessionalEvent.map((item)=>( 
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
      </LowerSectionWrapper>
      )
}