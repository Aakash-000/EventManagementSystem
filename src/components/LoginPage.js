import React from 'react';
import  styled from '@emotion/styled';
import { Container, Typography, TextField, Button } from '@mui/material';
import loginimage from '../images/forlogin.jpg'


const ContainerWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100vh;
  border-radius: 15px;
  background-color:#f1f1f1;
`;

const LeftWrapper = styled('div')({
  display:'flex',
  flex:0.65,
  height:'100vh'
})

const RightWrapper = styled(Container)({
  display:'flex',
  flex:0.35,
  flexDirection:'row',
  justifyContent:'center'
})

const FormWrapper = styled('form')`
  width: 100%;
  max-width: 400px;
  padding: 16px;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
`;

const Title = styled(Typography)`
  margin-bottom: 16px;
  text-align: center;
  font-family: 'Helvetica', Arial, sans-serif;
  font-size: 18px;
`;

const Content = styled.div`
  font-size: 14px;
`;

const CustomTextField = styled(TextField)`
  && {
    font-family: 'Arial', sans-serif;
    font-size: 15px;
    font-weight: bold;
  }
`;

const SubmitButton = styled(Button)`
  margin-top: 24px;
  background-color: #384E77; /* Update the button background color */
  color: #E6F9AF; /* Set the text color to white */
  &:hover {
  background-color:#384E77; /* Update the button background color on hover */
    color:#E6F9AF;
  }
`;

const LoginPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here
  };

  return (
    <ContainerWrapper component="main">
      <LeftWrapper>
      <img src={loginimage} style={{width:'100%',backgroundSize:'object-fit'}} alt="Login"/>
      </LeftWrapper>
      <RightWrapper>
      <FormWrapper onSubmit={handleSubmit}>
        <Title variant="h5">Login</Title>
        <Content>
          <CustomTextField
            variant="outlined"
            required
            fullWidth
            id="email"
            label="Email Address"
            type="email"
            InputProps={{
                style: { fontSize: '14px',fontFamily:'Helvetica'},
                inputProps: { style: { fontSize: '14px' } }
              }}
              InputLabelProps={{
                style: { fontSize: '13px' ,fontFamily:'Helvetica'},
              }}
            name="email"
            autoComplete="email"
            margin="normal"
          />
          <CustomTextField
            variant="outlined"
            required
            fullWidth
            id="password"
            label="Password"
            type="password"
            InputProps={{
                style: { fontSize: '14px',fontFamily:'Helvetica'},
                inputProps: { style: { fontSize: '14px' } }
              }}
              InputLabelProps={{
                style: { fontSize: '13px' ,fontFamily:'Helvetica'},
              }}
            name="password"
            
            autoComplete="current-password"
            margin="normal"
          />
        </Content>
        <SubmitButton
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            fontFamily: 'Lato, sans-serif',
            fontFamily: 'Montserrat , sans-serif',
            fontSize: '14px',
            fontWeight: 'bold',
          }} 
          color="primary"
        >
          Sign In
        </SubmitButton>
      </FormWrapper>
      </RightWrapper>
    </ContainerWrapper>
  );
};

export default LoginPage;
