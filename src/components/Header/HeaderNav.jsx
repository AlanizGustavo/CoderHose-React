import * as React from 'react';
import CartWidget from '../CartWidget/CartWidget.jsx'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import './style.css'
import { NavLink } from 'react-router-dom';


const pages = [{nombre:'Realiza tu pedido', path:'/productos/categories/all'}, {nombre:'FAQ', path:'/faq'}, {nombre:'Recetas', path:'/recetas'}, {nombre:'Contáctanos', path:'/contacto'}];


export function HeaderNav() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="fixed" sx={{backgroundColor: '#f19ccc'}}>
            <Container >
                <Toolbar disableGutters>
                    <NavLink to='/'>
                        <Box
                            component="img"
                            sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
                            alt="Logo de Dulce Victoria"
                            src="/assets/img/logos/dulce_victoria_amarillo.PNG"
                            className='logo'
                        />
                    </NavLink>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="primary"
                        >
                            <MenuIcon sx={{ color: '#F7F0CA', fontSize: 40 }}/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 115,
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 55,
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' }
                            }}
                            
                        >
                            
                        {pages.map((page, index) => (
                            <NavLink to={page.path} 
                                key={index}
                                >
                                <MenuItem 
                                    className='animacion'
                                    key={page.nombre} 
                                    onClick={handleCloseNavMenu}
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
                                    <Typography 
                                        textAlign="center"
                                    >
                                        {page.nombre}
                                    </Typography>
                                </MenuItem>
                            </NavLink>
                        ))}
                        </Menu>
                    </Box>
                    <NavLink to='/'>
                        <Box
                            component="img"
                            sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
                            alt="Logo de Dulce Victoria"
                            src="/assets/img/logos/dulce_victoria_amarillo.PNG"
                            className='logo'
                            flexGrow={0}
                        />
                    </NavLink>
                    <Typography sx={{ flexGrow: 1 }}/>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page, index) => (
                            <NavLink to={page.path}
                                key={index}
                            >
                                <Button
                                    className='animacion'
                                    key={page.nombre}
                                    onClick={handleCloseNavMenu}
                                    color='primary'
                                    variant='primary'
                                    sx={{ 
                                        my: 2, 
                                        display: 'block',
                                        marginRight: '10px',
                                        fontSize: '2rem',
                                        fontWeight: '600',
                                    }}
                                    size= 'large'
                                >
                                    {page.nombre}
                                </Button>
                            </NavLink>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <CartWidget />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default HeaderNav;