import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getFetch } from '../../utils/gfetch';

const ItemDetail = () => {
  const idProducto= useParams()
  const producto = parseInt(idProducto);

 useEffect(()=>{


 })

  return (
    <div>Detalle</div>
  )
}

export default ItemDetail