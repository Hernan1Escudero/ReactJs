import ItemDetail from "../ItemDetail/ItemDetail"
import { useState } from "react";
import { getFetch } from '../../utils/gfetch'
import { BrowserRouter, Routes, useParams } from 'react-router-dom'
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
       .finally (console.log( "resolve de categoria"))
       }
       
        else{
         getFetch().then( resolve=>{
           setproductos(resolve)
         })
         .catch(error => console.log(error))
         .finally (console.log( "termino"))
   
        }
      
     },[idProducto])

    return (
        <div  className="container ">
                
         <ItemDetail   productos={productos}>  </ItemDetail>
         <div className="card">cart container</div>
        </div>
    )
}

export default ItemDetailContainer
