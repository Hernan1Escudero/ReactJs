import Item from "../Item/Item"
import { Link } from "react-router-dom"

const ItemList = (props) => {

  return (
  
    <div className="container d-flex flex-wrap justify-content-around "> 
    {props.productos.map( producto =><Link key={producto.id} className='col-3 card m-2 ' to={`/detail/${producto.id}`}>
                                     <Item  producto={producto} />
                                    </Link>
    )}
    </div>
  )
}

export default ItemList