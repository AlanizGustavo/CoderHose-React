import { createTheme } from '@mui/material'

export const theme = createTheme({
    palette: {
      primary: {
        main: '#F7F0CA',
      },
      secondary: {
        main: '#f19ccc',
      },
    },
    components: {
      MuiButton: {
        variants: [
          {
            props: { variant: 'primary', color: 'primary' },
            style: {
              backgroundColor: '#F7F0CA',
              color:'black',
              borderRadius: `15px`,
              fontFamily: '"Amatic SC", cursive' ,
              ":hover": {
                backgroundColor:'#f19ccc',
                boxShadow:'0px 0px 25px 1px rgb(0,0,0)',
                color:'#F7F0CA',
            },
            },
          },
          {
            props: { variant: 'secondary', color: 'primary' },
            style: {
              backgroundColor: '#F7F0CA',
              color:'black',
              borderRadius: `15px`,
              fontFamily: '"Amatic SC", cursive',
              ":hover": {
                backgroundColor:'#F7F0CA',
                boxShadow:'0px 0px 25px 1px rgb(0,0,0)',
              }
            },
          },
          {
            props: { variant: 'primary', color: 'secondary' },
            style: {
              backgroundColor: '#f19ccc',
              color:'#F7F0CA',
              borderRadius: `15px`,
              fontFamily: '"Amatic SC", cursive',
              ":hover": {
                backgroundColor:'#F7F0CA',
                boxShadow:'0px 0px 25px 1px rgb(0,0,0)',
                color: '#f19ccc'
              }
            },
          },
          {
            props: { variant: 'secondary', color: 'secondary'},
            style: {
              backgroundColor: '#f19ccc',
              color:'#F7F0CA',
              borderRadius: `15px`,
              fontFamily: '"Amatic SC", cursive' ,
              ":hover": {
                backgroundColor:'#F7F0CA',
                boxShadow:'0px 0px 25px 1px rgb(0,0,0)',
                color:'#f19ccc',
            },
            },
          },
          {
            props: { variant:'outlined' },
            style: {
              backgroundColor: 'transparent',
              color:'black',
            },
          },
        ],
      },
    },
    typography:{
      h1 : {
        fontSize: '10rem',
        '@media (max-width:600px)': {
          fontSize: '8rem',
        },
        '@media (max-width:400px)': {
          fontSize: '6rem',
        },
      },  
      h2 : {
        fontSize: '6rem',
        '@media (max-width:600px)': {
          fontSize: '5rem',
        },
        '@media (max-width:400px)': {
          fontSize: '4rem',
        },
      }
    }
  });