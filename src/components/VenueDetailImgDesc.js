import styled from '@emotion/styled';
import { Container, Grid, TextField } from '@mui/material';
import React,{useState} from 'react'
import {  createTheme, ThemeProvider } from '@mui/material';
import {  VisibilityOutlined } from '@mui/icons-material';


const FileInputLabel = styled.label`
  display: block;
  font-size: 14px;
  font-weight: bold;
`;


const theme = createTheme({
    components:{
        MuiInputBase:{
            styleOverrides:{
                root:{
                    '& .MuiInputBase-input':{
                        fontSize:'14px',
                        fontFamily:'IBM Plex Sans, sans-serif',
                        fontWeight:'500',
                        letterSpacing:'0.3px'
                    }
                }
            }
        },MuiFormLabel:{
            styleOverrides:{
                root:{
                    '&.MuiFormLabel-root':{
                        fontSize:'13px',
                        fontFamily:'IBM Plex Sans, sans-serif',
                        fontWeight:'500',
                        letterSpacing:'0.3px'
                    }
                }
            }
        }
    }
});

function VenueDetailImgDesc() {
    const [selectedFile, setSelectedFiles] = useState([]);
    const [value, setValue] = useState('');

    const handleChange = (event) => {
    setValue(event.target.value);
    };

    
    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        setSelectedFiles(files);
      };
      console.log(selectedFile)
      const handleOverlayClick = () => {
        if (selectedFile.length > 0) {
            selectedFile.forEach((item)=>{
                const fileUrl = URL.createObjectURL(item);
                window.open(fileUrl, '_blank');
            }
            )
        }
      };

  return (
        <Container maxWidth={'xl'} sx={{display:'flex',flexDirection:'column',gap:'20px',marginTop:'20px'}}>
        <Grid item xs={12} sx={{display:'flex',flexDirection:'row',gap:'10px',alignItems:'center'}}>
            <FileInputLabel>
              Upload venue verification file(PDF or Image):
            </FileInputLabel>
            <input
                type="file"
                accept=".pdf,.png,.jpg"
                onChange={handleFileChange}
                multiple
                required
              />
        <VisibilityOutlined onClick={handleOverlayClick} sx={{cursor:'pointer'}}/>
        </Grid>
        <ThemeProvider theme={theme}>
        <TextField type="textarea" value={value} onChange={handleChange} label="Write Description" multiline 
        fullWidth rows={10}/>
        </ThemeProvider>
        </Container>
  )
}

export default VenueDetailImgDesc