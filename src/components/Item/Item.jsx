
import { Link } from "react-router-dom"

const Item = (props) => {

  return (
 
    <div  className='  '>
                                          <div  className='card-header'> {props.producto.name}</div>
                                          <div  className='card-body'>Stock:{props.producto.stock}
                                          <img src={props.producto.photo} alt="" className='w-100' />
                                           Categoria: {props.producto.categoria}<br/>
                                           Precio :{props.producto.precio}
                                           </div>
                                          <div  className='card-footer'>
                                             <button  className='btn btn-outline-dark w-100'>Detalle </button>
                                           
                                          </div>
                                          
                                       </div>
                                       
  )
}

export default Item