import styled from '@emotion/styled';
import { Checkbox, Container, FormControl, Grid, InputLabel, ListItemText, MenuItem, Select, TextField, ThemeProvider, Typography, createTheme } from '@mui/material'
import React,{useState} from 'react'
import {eventNames} from './EventArray'

const RoleDropdown = styled(TextField)`
  && {
    width: 100%;
  }
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
    const [pricing,setPricing] = useState("");
    const[pref,setPref] = useState("");
    const[dropdownValues,setDropdownValues] = useState({});
    

    const handleRoleChange = (event) => {
        setRole(event.target.value);
    };

    const handleDropdownChange = (event)=> {
        setDropdownValues((prevValues) => ({
          ...prevValues,
          [event.target.name]: event.target.value,
        }));
    }

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
    <Container maxWidth={'xl'}>
        <Typography variant='body2' sx={{fontFamily:'IBM Plex Sans, sans-serif',fontWeight:'600',
        marginBottom:'30px'}}>
        <li sx={{padding:'0px'}}> Set Pricing Detail </li></Typography>
        <Grid container spacing={1} sx={{display:'flex',flexDirection:'row',gap:'10px'}}>
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
              <MenuItem value={item}
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
                name="0"
                multiple
                InputLabelProps={{
                  style: { fontSize: '13px' ,fontFamily:'Roboto, Helvetica, sans-serif'},
                }}
                variant="outlined"
                disabled={pref == "" ? true : false}
                value={dropdownValues[0] || []}
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
              label="Capacity(In Person)"
              name="textField1"
              value={priceValue.pricevalue || ''}
              onChange={(e)=>setPriceValue(e.target.value)}
              fullWidth
              margin="normal"
              />
              </Grid>
          </Grid>
    </Container>
    </ThemeProvider>
  )
}

export default EventPriceDetail