import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const FAQ = () => {
  return (
    <Stack mt='12rem' mb='3rem' padding='4rem' >
        <Typography mb='3rem' textAlign='center' variant='h1' component='h2' fontFamily='Honey Butter'>
            Preguntas Frecuentes
        </Typography>
        <Typography component='article'>
            <Typography variant='h3' component='h3' fontFamily='Amatic SC'>
                Como realizar un pedido?
            </Typography>
            <Typography ml='2rem' variant='h4' component='p' fontSize='1.5rem' fontFamily='Montserrat Regular, sans-serif'>
                Realiza tu pedido desde las dos vias habilitadas. Envia Whatsapp detallando tu pedido y fecha de entrega y si es necesario enviarlo a domicilio o completa el formulario en la seccion
            </Typography>
        </Typography>
        <Typography component='article'>
            <Typography variant='h3' component='h3' fontFamily='Amatic SC'>
                Cuales son los medios de pago disponibles?
            </Typography>
            <Typography ml='2rem' variant='body1' fontSize='1.5rem' component='p' fontFamily='Montserrat Regular, sans-serif'>
            Todos los pedidos se realizan mediante seña con el 50% del valor del producto. Se puede realizar el pago mediante transferencia bancaria, Mercado Pago o efectivo
            </Typography>
        </Typography>
        <Typography component='article'>
            <Typography variant='h3' component='h3' fontFamily='Amatic SC'>
                Donde estamos Ubicados?
            </Typography>
            <Typography ml='2rem' variant='body1' component='p' fontSize='1.5rem' fontFamily='Montserrat Regular, sans-serif'>
            Nos encontramos en Bº Santa Genoveva, calle Formosa 581, Neuquén capital.
            </Typography>
        </Typography>
        <Typography component='article'>
            <Typography variant='h3' component='h3' fontFamily='Amatic SC'>
                Cuantos dias de anticipacion necesito para encargar?
            </Typography>
            <Typography ml='2rem' variant='body1' component='p' fontSize='1.5rem' fontFamily='Montserrat Regular, sans-serif'>
                Todos los pedidos se realizan con un minimo de 1 semana de anticipacion. Pedidos con menos de una semana seran evaluados segun disponibilidad
            </Typography>
        </Typography>
        <Typography component='article'>
            <Typography variant='h3' component='h3' fontFamily='Amatic SC'>
                Como cortar las Drip Cake en porciones?
            </Typography>
            <Typography ml='2rem' variant='body1' component='p' fontSize='1.5rem' fontFamily='Montserrat Regular, sans-serif'>
                Las Drip Cake deben ser cortadas como tortas cuadradas, realizando cortes paralelos al diametro de la torta.
            </Typography>
        </Typography>
        <Typography component='article'>
            <Typography variant='h3' component='h3' fontFamily='Amatic SC'>
                Como transportar las tortas?
            </Typography>
            <Typography ml='2rem' variant='body1' component='p' fontSize='1.5rem' fontFamily='Montserrat Regular, sans-serif'>
                Transportar las tortas en las bases proporcionadas al ser entregadas. Si se va a trasladar en vehiculo, es recomendable que se encuentre en una superficie plana con fricción.
            </Typography>
        </Typography>

    </Stack>
  )
}

export default React.memo(FAQ)