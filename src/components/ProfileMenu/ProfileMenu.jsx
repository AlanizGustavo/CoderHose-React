import { Avatar, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { getAuth, signOut } from "firebase/auth";
import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const settings = [{title:'Logout', navTo: './home'}];

const ProfileMenu = () => {
    const [anchorElUser, setAnchorElUser] = useState(null);
    
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    
    const auth = getAuth();
    const user = auth.currentUser; 

    const handleLogOut = async () => {
        await signOut(auth);
    }
    
return (
    <Box sx={{ flexGrow: 0 }}>
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt={user.providerData[0].displayName} src={user.providerData[0].photoURL != null ? user.providerData[0].photoURL : ' '} sx={{ width: 54, height: 54, fontSize: 30}}/>
        </IconButton>
        <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
            >
                
            {settings.map((setting) => (
                <NavLink to={setting.navTo} key={setting.title}> 
                    <MenuItem 
                        onClick={handleLogOut}
                        className='animacion'
                        sx={{
                            margin:'0px 10px',
                            ":hover": {
                                backgroundColor:'#f19ccc',
                                boxShadow:'0px 0px 25px 1px rgb(0,0,0)',
                                color:'#F7F0CA',
                            },
                            my: 2,  
                            backgroundColor:'#F7F0CA',
                            color: '#f19ccc', 
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: '15px',
                            fontSize: '2rem',
                            fontWeight: '600',
                            width: 'auto'
                        }}
                    >
                        <Typography textAlign="center">{setting.title}</Typography>
                    </MenuItem>
                </NavLink>
            ))}
        </Menu>
    </Box>
  )
}

export default ProfileMenu