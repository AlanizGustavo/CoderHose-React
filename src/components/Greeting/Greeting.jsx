import React from 'react'
import './style.css'

const Greeting = ({nombre}) => {
  return (
    <div className='titulo'>
        <h1>Te damos la bienvenida {nombre}</h1>
    </div>
  )
}

export default Greeting