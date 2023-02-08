import Item from "../Item/Item"

 const ItemList = (props) => {
    
  return (
   
   <div className='container d-flex flex-wrap justify-content-center '> {props.productos.map( producto => <Item key={producto.id} producto ={producto}/>)}
   </div>
      
      
        )
}

export default ItemList