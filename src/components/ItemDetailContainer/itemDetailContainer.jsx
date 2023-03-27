import ItemDetail from "../ItemDetail/ItemDetail"
import CartContainer from "../CartContainer/CartContainer";
import { useState } from "react";
import { getFetch } from '../../utils/gfetch'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'



const ItemDetailContainer = () => {

    const [productos, setproductos] = useState([])
    const {idProducto} = useParams();
   
     useEffect(()=>{
      
        if(idProducto){
          
        getFetch().then( res=>{
  
         setproductos(res.filter(productos => productos.id === parseInt(idProducto)  ))
       
       })
       .catch(error => console.log(error))
       .finally ()
       }
       
        else{
         getFetch().then( resolve=>{
           setproductos(resolve)
         })
         .catch(error => console.log(error))
         .finally ()
   
        }
      
     },[idProducto])

    return (
        <div  className="container ">
                
         <ItemDetail   productos={productos}>  </ItemDetail>
        
        </div>
    )
}

export default ItemDetailContainer
