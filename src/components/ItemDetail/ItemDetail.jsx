import React from 'react'
import CartContainer from '../CartContainer/CartContainer'
const ItemDetail = (props) => {
   
  return (
    <div  className="card mt-4 mb-2">{props.productos.map( producto =>
        <div   key={producto.id} className='text-center m-2 p-2'> 
            <div className='container d-flex '>
              <div  className='col card   '> 
                <img src={producto.photo} alt="" className=' w-100' />
              </div>
              <div className='col'>
                <div className=' '>
                  {producto.name}<br/>
                  Categoria: {producto.categoria}<br/>
                  Precio :{producto.precio} ${producto.id}<br/>
                  Stock:{producto.stock}<br/>
                  
                </div>
                <CartContainer className=''></CartContainer>
              </div>
            </div>
         
          
        </div>
          )}
          
    </div>
                                      
  )
}

export default ItemDetail