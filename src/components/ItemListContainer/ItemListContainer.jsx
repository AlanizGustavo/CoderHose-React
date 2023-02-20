import React from 'react'
import './style.css'

const ItemListContainer = ({Greeting}) => {
  return (
    <div className='titulo'>
        <h1> {Greeting} </h1>
    </div>
  )
}

export default ItemListContainer