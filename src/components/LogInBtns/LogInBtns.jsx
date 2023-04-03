import { Backdrop, Box, Button, Divider, Fade, Modal, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import GoogleIcon from '@mui/icons-material/Google';
import './style.css'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50vw',
    bgcolor: '#f19ccc',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius:5
};

const LogInBtns = () => {
    const [inputEmail, setInputEmail] = useState('')
    const [inputContrasenia, setInputContrasenia] = useState('')
    const [inputNombre, setInputNombre] = useState('')

    const [openIngresar, setOpenIngresar] = useState(false);
    const handleOpenIngresar = () => setOpenIngresar(true);
    const handleCloseIngresar = () => setOpenIngresar(false);

    const [openRegistrarse, setOpenRegristrarse] = useState(false);
    const handleOpenRegistrarse = () => setOpenRegristrarse(true);
    const handleCloseRegistrarse = () => setOpenRegristrarse(false);


    const auth = getAuth();
    const handleSubmitRegistrar = async (e) => {
        e.preventDefault();
        await createUserWithEmailAndPassword(auth, inputEmail,inputContrasenia);
        await updateProfile(auth.currentUser, {displayName: inputNombre});
        setInputNombre('');
        setInputEmail('');
        setInputContrasenia('');
        handleCloseRegistrarse()
    }
    
    const handleSubmitIngresar = async (e) => {
        e.preventDefault();
        await signInWithEmailAndPassword(auth, inputEmail,inputContrasenia);
        setInputNombre('');
        setInputEmail('');
        setInputContrasenia('');
        handleCloseIngresar()
    }
    const handleGoogle = async (e) => {
        e.preventDefault();
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider)
        setInputNombre('');
        setInputEmail('');
        setInputContrasenia('');
        handleCloseIngresar()
    }

    return (
        <Stack display='flex' direction='row'>
            <Button onClick={handleOpenRegistrarse} size='medium' variant='outlined' sx={{marginRight:"2rem"}}>Registrarse</Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openRegistrarse}
                onClose={handleCloseRegistrarse}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                backdrop: {
                    timeout: 500,
                },
                }}
            >
                <Fade in={openRegistrarse}>
                    <Box sx={style}>
                        <Typography component='h3' variant='h2' textAlign='center' fontFamily='Amatic SC'>
                            Registrarse
                        </Typography>
                        <form onSubmit={handleSubmitRegistrar} className='form'>
                            <input type='text' placeholder='Nombre y Apellido' value={inputNombre} required onChange={(e)=>setInputNombre(e.target.value)}/>
                            <input type='email' placeholder='Email' value={inputEmail} required onChange={(e)=>setInputEmail(e.target.value)}/>
                            <input type='password' placeholder='Contraseña' value={inputContrasenia} required onChange={(e)=>setInputContrasenia(e.target.value)}/>
                            <Button type='submit' size='medium' color='primary' variant='contained'>Enviar</Button>
                        </form>
                        <Divider variant='fullWidth' />
                        <Button onClick={handleGoogle} sx={{width:'100%', margin:'1rem 0rem'}} variant='contained' startIcon={<GoogleIcon />}>LogIn con Google</Button>
                    </Box>
                </Fade>
            </Modal>

            <Button onClick={handleOpenIngresar} size='medium' color='primary' variant='contained'>Ingresar</Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openIngresar}
                onClose={handleCloseIngresar}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={openIngresar}>
                    <Box sx={style}>
                        <Typography component='h3' variant='h2' textAlign='center' fontFamily='Amatic SC'>
                            Ingresar
                        </Typography>
                        <form onSubmit={handleSubmitIngresar} className='form'>
                            <input type='email' placeholder='Email' value={inputEmail} required onChange={(e)=>setInputEmail(e.target.value)}/>
                            <input type='password' placeholder='Contraseña' value={inputContrasenia} required onChange={(e)=>setInputContrasenia(e.target.value)}/>
                            <Button type='submit' size='medium' color='primary' variant='contained'>Enviar</Button>
                        </form>
                        <Divider variant='fullWidth' />
                        <Button onClick={handleGoogle} sx={{width:'100%', margin:'1rem 0rem'}} variant='contained' startIcon={<GoogleIcon />}>LogIn con Google</Button>
                    </Box>
                </Fade>
            </Modal>
        </Stack>
    )
}

export default LogInBtns