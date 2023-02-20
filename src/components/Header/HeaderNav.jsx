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


const pages = ['Realiza tu pedido', 'FAQ', 'Recetas', 'Contáctanos'];


export function HeaderNav() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" sx={{backgroundColor: '#f19ccc'}}>
            <Container >
                <Toolbar disableGutters>
                    <Box
                        component="img"
                        sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
                        alt="Logo de Dulce Victoria"
                        src="../assets/img/logos/dulce_victoria_amarillo.PNG"
                        className='logo'
                    />

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
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
                            
                        {pages.map((page) => (
                            <MenuItem 
                                className='animacion'
                                key={page} 
                                onClick={handleCloseNavMenu}
                                sx={{ 
                                    ":hover": {
                                        backgroundColor:'#f19ccc',
                                        boxShadow:'0px 0px 25px 1px rgb(0,0,0)',
                                        color:'#F7F0CA',
                                    },
                                    my: 2, 
                                    backgroundColor: '#F7F0CA', 
                                    color: '#f19ccc', 
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: '15px',
                                    fontFamily: '"Amatic SC", cursive' ,
                                    fontSize: '2rem',
                                    fontWeight: '600',
                                    width: '100%'
                                }}
                            >
                                <Typography 
                                    textAlign="center"
                                >
                                    {page}
                                </Typography>
                            </MenuItem>
                        ))}
                        </Menu>
                    </Box>
                    <Box
                        component="img"
                        sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
                        alt="Logo de Dulce Victoria"
                        src="../assets/img/logos/dulce_victoria_amarillo.PNG"
                        className='logo'
                        flexGrow={0}
                    />
                    <Typography sx={{ flexGrow: 1 }}/>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                className='animacion'
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ 
                                    ":hover": {
                                        backgroundColor:'#f19ccc',
                                        boxShadow:'0px 0px 25px 1px rgb(0,0,0)',
                                        color:'#F7F0CA',
                                    },
                                    my: 2, 
                                    backgroundColor: '#F7F0CA', 
                                    color: '#f19ccc', 
                                    display: 'block',
                                    borderRadius: '15px',
                                    marginRight: '10px',
                                    fontFamily: '"Amatic SC", cursive' ,
                                    fontSize: '2rem',
                                    fontWeight: '600',
                                }}
                                size= 'large'
                                variant="contained"
                            >
                                {page}
                            </Button>
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