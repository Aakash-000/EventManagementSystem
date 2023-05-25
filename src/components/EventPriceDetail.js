import styled from '@emotion/styled';
import { Button, Checkbox, Container, FormControl, Grid, InputLabel, ListItemText, MenuItem, Select, TextField, ThemeProvider, Typography, createTheme } from '@mui/material'
import React,{useState} from 'react'
import {eventNames} from './EventArray'

const RoleDropdown = styled(TextField)`
  && {
    width: 100%;
  }
`;

const SubmitButton = styled(Button)`
  background-color: #384E77; /* Update the button background color */
  color: #E6F9AF; /* Set the text color to white */
  &:hover {
    background-color: #384E77; /* Update the button background color on hover */
    color: #E6F9AF;
  },
`;

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

function EventPriceDetail() {
    const [role, setRole] = useState("");
    const [priceValue,setPriceValue] = useState("");
    const[pref,setPref] = useState("");
    const[dropdownValues,setDropdownValues] = useState({});
    

    const handleEventPriceSubmit = (e)=> {
      e.preventDefault();
      console.log({role,pref,dropdownValues,priceValue})
    }

    const handleRoleChange = (event) => {
        setRole(event.target.value);
    };

    const handleDropdownChange = (event)=> {
        setDropdownValues((prevValues) => ({
          ...prevValues,
          [event.target.name]: event.target.value,
        }));
    }

    console.log(dropdownValues)

    const eventValues = ()=> {
      for(let item in eventNames){
        if(role == item){
          return Object.keys(eventNames[item])
        }
      }
    }
    
    const eventValuesNext = ()=> {
      for(let item in eventNames){
        if(role == item){
          for(let i in eventNames[item]){
            if(pref == i){
              return eventNames[item][i]
            }
          }
        }
      }  
    }

    eventValuesNext()

    return (
      <ThemeProvider theme={theme}>
        <Container maxWidth={'xl'} sx={{marginBottom:'10px'}}>
        <Grid container spacing={1} sx={{display:'flex',flexDirection:'row',alignItems:'center',gap:'20px'}}>
        <Grid xs={2}>
              <RoleDropdown
              select
              label="EventType"
              InputProps={{
                style: { fontSize: '14px',fontFamily:'Roboto, Helvetica, sans-serif'}
              }}
              InputLabelProps={{
                style: { fontSize: '13px',fontFamily:'Roboto, Helvetica, sans-serif'},
              }}
              value={role}
              onChange={handleRoleChange}
              variant="outlined"
              required
              >                                       
              {Object.keys(eventNames).map((item)=>(
              <MenuItem value={item} required
              sx={{
                fontSize:'13px',
                fontFamily:'Roboto, Helvetica, sans-serif'
              }}>{item}</MenuItem>
                ))}
            </RoleDropdown>
          </Grid>
          <Grid xs={2}>
          <RoleDropdown
              select
              disabled={role == "" ? true : false}
              label="Preference"
              name="preference"
              sx={{cursor: role == "" ? 'not-allowed' : 'pointer'}}
              InputProps={{
                style: { fontSize: '14px',fontFamily:'Roboto, Helvetica, sans-serif'}
              }}
              InputLabelProps={{
                style: { fontSize: '13px' ,fontFamily:'Roboto, Helvetica, sans-serif'},
              }}
              value={pref}
              onChange={(e)=>setPref(e.target.value)}
              variant="outlined"
              required
              > 
              { role !="" && eventValues().map((value)=>(
                        <MenuItem value={value}
              sx={{
                fontSize:'13px',
                fontFamily:'Roboto, Helvetica, sans-serif'
              }}>{value}</MenuItem>
                    ))
              }
              </RoleDropdown>
              </Grid>
              <Grid xs={2} >
              <FormControl fullWidth>
              <InputLabel id="dropdown0-label" sx={{fontSize:'13px',paddingLeft:'4px',
              backgroundColor:'#fff',width:'83px',
                fontFamily:'Roboto, Helvetica, sans-serif',paddingTop:'3px'}}>Event Types</InputLabel>
              <Select
                labelId="dropdown1-label"
                id="dropdown0"
                name="recipeitem"
                multiple
                InputLabelProps={{
                  style: { fontSize: '13px' ,fontFamily:'Roboto, Helvetica, sans-serif'},
                }}
                variant="outlined"
                disabled={pref == "" ? true : false}
                value={dropdownValues.recipeitem || []}
                onChange={handleDropdownChange}
                renderValue={(selected) => selected.join(',')}
              >
              { pref !=""  && eventValuesNext().map((value)=>(
             <MenuItem value={`${value}`}>
             <Checkbox checked={dropdownValues[0]?.includes(`${value}`)} />
             <ListItemText primary={`${value}`} />
            </MenuItem>
                    ))
              }
              </Select>
              </FormControl>
              </Grid>
              <Grid xs={2}>
              <TextField
              type="number"
              label="PriceValue"
              name="textField1"
              value={priceValue}
              onChange={(e)=>setPriceValue(e.target.value)}
              fullWidth
              />
              </Grid>
              <SubmitButton type="submit" disableRipple fullWidth variant="contained" sx={{
              fontFamily: 'Lato, sans-serif',
              fontFamily: 'Montserrat , sans-serif',
              fontSize: '14px',
              height:'50px',
              fontWeight: 'bold',
              width:'12%'
          }} color="primary" onClick={handleEventPriceSubmit}>
          Submit
        </SubmitButton>
          </Grid>
    </Container>
    </ThemeProvider>
  )
}

export default EventPriceDetail