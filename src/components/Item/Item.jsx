

const Item = (props) => {

  return (
 
    <div >
                                          <div  className='card-header text-center'> {props.producto.name}</div>
                                          
                                           <img  src={props.producto.photo} alt="" className='w-100' />
                                           <div  className='card-body text-justify'>
                                            Stock:{props.producto.stock}<br/>
                                           Categoria: {props.producto.categoria}<br/>
                                           Precio : ${props.producto.precio} 
                                           </div>
                                          <div  className='card-footer'>
                                          
                                          <button  className='btn btn-outline-dark w-100'>Detalle </button>
                                            
                                          </div> 
                                          
                                       </div>
                                       
  )
}

export default Item