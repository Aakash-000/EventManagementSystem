import React,{useContext, useState} from 'react';
import { styled } from '@mui/system';
import { AppBar, Toolbar, Typography,IconButton, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { AuthContext } from '../context/AuthContext';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

const NavbarWrapper = styled(AppBar)(({siderbarT})=>({
  width:siderbarT ? `calc(100vw - 240px)`: `calc(100vw - 64px)`,
  marginLeft: siderbarT ? '240px' : '64px',
  backgroundColor: 'rgba(0, 0, 0, 0.01)',
  height: '64px'
}));

const ToolbarWrapper = styled(Toolbar)({
  display: 'flex',
  alignItems: 'center',
  padding: '0 16px'
});

const Logo = styled(Typography)({
  flexGrow: 1,
  fontWeight: 600,
  color:'#5B7B7A',
  fontFamily:'Helvetica,Arial,sans-serif'
});

const NavButton = styled(Button)`
  margin-left:10px;
  color:#5B7B7A;
  font-size:14px;
  font-family: 'Helvetica',sans-serif;
  font-weight: 600;
  text-tansform: none;
  &:hover{
    color: #3C887E;
  }
`;

const DashboardNavbar = () => {
    const[state,setState] = useContext(AuthContext);
    const siderbarT = state.siderbarToggle;

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
      const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    };
      const handleClose = () => {
    setAnchorEl(null);
    };

    const toggleSidebar = () => {
      setState({...state,siderbarToggle:!state.siderbarToggle});
    };
  
    
    return (
    <NavbarWrapper siderbarT={siderbarT} position="static">
      <ToolbarWrapper>
      <IconButton sx={{marginRight:'10px',color:'#5B7B7A'}} color="inherit" onClick={toggleSidebar}>
          {state.siderbarToggle ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
        <Logo variant="h7">Dashboard</Logo>
      <Tooltip >
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32,color:'#4E6151',
            fontSize:'14px',
            fontFamily:'Roboto,sans-serif',letterSpacing:'0px',fontWeight:'550'
            }}>AD</Avatar>
          </IconButton>
        </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 21,
              height: 21,
              ml: -0.5,
              mr: 1.7,

            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
            width:'170px',
           
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem sx={{ fontSize:'14px',
            fontFamily:'Oxygen,Roboto,sans-serif',
            fontWeight:'500'}} onClick={handleClose}>
          <Avatar/> Profile
        </MenuItem>
        <Divider />
        <MenuItem  sx={{ fontSize:'14px',
            fontFamily:'Oxygen,Roboto,sans-serif',
            fontWeight:'500'}}
        onClick={handleClose}>
          <ListItemIcon sx={{marginRight:'-5px'}}>
            <Settings sx={{width: 21, height: 21,margin:'0px 0px 0px -5px'}} />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem sx={{ fontSize:'14px',
            fontFamily:'Oxygen,Roboto,sans-serif',
            fontWeight:'500'}} onClick={handleClose}>
          <ListItemIcon sx={{marginRight:'-5px'}}>
            <Logout sx={{width: 21, height: 21, margin:'0px 0px 0px -3px'}} />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
      </ToolbarWrapper>
    </NavbarWrapper>
  );
};

export default DashboardNavbar;
