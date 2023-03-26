import React from 'react'

const ItemDetail = (props) => {
   
  return (
    <div  className="card mt-4 mb-2">{props.productos.map( producto =>
        <div   key={producto.id} className='text-center '> 
            {producto.name}
            <div className='container d-flex '>
              <div  className='col  '> 
                <img src={producto.photo} alt="" className='col w-100' />
            </div>
              <div className='col d-flex justify-content-center'>
                Categoria: {producto.categoria}<br/>
                Precio :{producto.precio} ${producto.id}<br/>
                Stock:{producto.stock}
              </div>
            </div>
          
        </div>
          )}
    </div>
                                      
  )
}

export default ItemDetail