import React from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';


const FooterContainer = styled('footer')`
background-color: #f5f5f5;
padding:20px;
margin:0px 0px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`;

const FooterSection = styled('div')`
  margin-bottom: 20px;
`;

const SocialLinks = styled('ul')`
  list-style: none;
  padding: 0;
  display: flex;
  & li {
    margin-right: 10px;
  }
`;
const SocialIconsWrapper = styled('div')({
    display: 'flex',
    gap: '10px',
  });

const FooterSectionComponent = () => {
  return (
    <FooterContainer>
      <FooterSection>
        <Typography variant="h6" sx={{fontSize:'13px',fontWeight:'bold',fontFamily:'Helvetica,sans-serif'}}>About Us</Typography>
        <Typography variant="body2">
          <h4>College Project</h4>
          <p>Members</p>
          <ul style={{padding:'0px 14px',fontSize:'13px'}}>
            <li>Shiva Prasad Parajuli</li>
            <li>Aakash Dhakal</li>
          </ul>
        </Typography>
      </FooterSection>
      <FooterSection>
        <Typography variant="h6" sx={{fontSize:'13px',fontWeight:'bold',fontFamily:'Helvetica,sans-serif'}}>Contact Us</Typography>
        <br></br>
        <Typography variant="body2" sx={{fontSize:'13px',fontFamily:'Helvetica,sans-serif'}}>Email: eventmanagementsytem@gmail.com</Typography>
        <Typography variant="body2" sx={{fontSize:'13px',fontFamily:'Helvetica,sans-serif'}}>Phone: +977 985183023</Typography>
      </FooterSection>
      <FooterSection>
        <Typography variant="h6" sx={{fontSize:'13px',fontWeight:'bold',fontFamily:'Helvetica,sans-serif'}}>Follow Us</Typography>
        <SocialLinks>
          <li >
            <Link href="https://www.facebook.com" 
            sx={{textDecoration:'none',fontFamily:'Helvetica,sans-serif',fontSize:'13px',color:'black'}} target='_blank'>
            <SocialIconsWrapper>
            <Facebook />
            </SocialIconsWrapper>Facebook</Link>
          </li>
          <li >
            <Link href="https://www.twitter.com" 
            sx={{textDecoration:'none',fontFamily:'Helvetica,sans-serif',fontSize:'13px',color:'black'}} target='_blank'>
            <SocialIconsWrapper>
            <Twitter/>
            </SocialIconsWrapper>Twitter</Link>
          </li>
          <li >
            <Link href="https://www.instagram.com" 
            sx={{textDecoration:'none',fontFamily:'Helvetica,sans-serif',fontSize:'13px',color:'black'}} target='_blank'>
            <SocialIconsWrapper>
            <Instagram/>
            </SocialIconsWrapper>
            Instagram</Link>
          </li>
        </SocialLinks>
      </FooterSection>
      <Typography sx={{fontSize:'12px',fontFamily:'Oxygen,sans-serif',fontWeight:'600'}} variant="body2" color="textSecondary" align="center">
        &copy; {new Date().getFullYear()} Event Management System. All rights reserved.
      </Typography>
    </FooterContainer>
  );
}

export default FooterSectionComponent;
