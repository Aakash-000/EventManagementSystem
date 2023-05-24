import React ,{useState} from 'react';
import  styled  from '@emotion/styled';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';

const ContainerWrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  border-radius: 15px;
  background-color: #f1f1f1; /* Update the background color */
`;

const FormWrapper = styled('form')`
  width: 100%;
  max-width: 600px;
  padding: 16px;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
`;

const Title = styled(Typography)`
  margin-bottom: 16px;
  text-align: center;
  font-family: Helvetica', Arial, sans-serif;
  font-size: 18px;
  font-weight:500;
`;

const CustomTextField = styled(TextField)`
  && {
    font-family: 'Arial', sans-serif;
    font-weight: bold;
  }
`;

const SubmitButton = styled(Button)`
  margin-top: 24px;
  background-color: #384E77; /* Update the button background color */
  color: #E6F9AF; /* Set the text color to white */
  &:hover {
    background-color: #384E77; /* Update the button background color on hover */
    color:#E6F9AF;
  }
`;
const FileInputLabel = styled.label`
  display: block;
  margin-top: 16px;
  font-size: 14px;
  font-weight: bold;
`;

const RegistrationPageForDealer = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform registration logic here
  };

  return (
    <ContainerWrapper component="main" maxWidth="xl">
      <FormWrapper onSubmit={handleSubmit} >
        <Title variant="h5">Registration for Dealer</Title>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <CustomTextField
              variant="outlined"
              required
              fullWidth
              id="firstName"
              type="text"
              label="First Name"
              InputProps={{
                style: { fontSize: '14px',fontFamily:'Helvetica'},
                inputProps: { style: { fontSize: '14px', lineHeight: '1' } }
              }}
              InputLabelProps={{
                style: { fontSize: '13px' ,fontFamily:'Helvetica'},
              }}
              name="firstName"
              autoComplete="given-name"
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <CustomTextField
              variant="outlined"
              required
              fullWidth
              id="lastName"
              type="text"
              label="Last Name"
              InputProps={{
                style: { fontSize: '14px',fontFamily:'Helvetica'},
                inputProps: { style: { fontSize: '14px', lineHeight: '1' } }
              }}
              InputLabelProps={{
                style: { fontSize: '13px' ,fontFamily:'Helvetica'},
              }}
              name="lastName"
              autoComplete="family-name"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <CustomTextField
              variant="outlined"
              required
              fullWidth
              id="email"
              type="email"
              label="Email Address"
              InputProps={{
                style: { fontSize: '14px',fontFamily:'Helvetica'},
                inputProps: { style: { fontSize: '14px', lineHeight: '1' } }
              }}
              InputLabelProps={{
                style: { fontSize: '13px' ,fontFamily:'Helvetica'},
              }}
              name="email"
              autoComplete="email"
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <CustomTextField
              variant="outlined"
              required
              fullWidth
              id="address"
              type="text"
              label="Address"
              InputProps={{
                style: { fontSize: '14px',fontFamily:'Helvetica'},
                inputProps: { style: { fontSize: '14px', lineHeight: '1' } }
              }}
              InputLabelProps={{
                style: { fontSize: '13px' ,fontFamily:'Helvetica'},
              }}
              name="address"
              autoComplete="address"
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <CustomTextField
              variant="outlined"
              required
              fullWidth
              id="phoneNumber"
              type="number"
              label="Phone Number"
              InputProps={{
                style: { fontSize: '14px',fontFamily:'Helvetica'},
                inputProps: { style: { fontSize: '14px' } }
              }}
              InputLabelProps={{
                style: { fontSize: '13px' ,fontFamily:'Helvetica'},
              }}
              name="phoneNumber"
              autoComplete="tel"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <FileInputLabel>
              Upload venue verification file(PDF or Image):
              <input
                type="file"
                accept=".pdf,.png,.jpg"
                onChange={handleFileChange}
                multiple
                required
                
              />
            </FileInputLabel>
          </Grid>
        </Grid>
        <SubmitButton type="submit" fullWidth variant="contained" sx={{
        fontFamily: 'Lato, sans-serif',
        fontFamily: 'Montserrat , sans-serif',
        fontSize: '14px',
        fontWeight: 'bold',
      }} color="primary">
          Register
        </SubmitButton>
      </FormWrapper>
    </ContainerWrapper>
  );
};

export default RegistrationPageForDealer;
