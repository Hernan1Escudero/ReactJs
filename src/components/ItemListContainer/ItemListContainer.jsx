
import ItemList from '../ItemList/ItemList'
import { useState } from 'react'
import { useEffect } from 'react'
import { getFetch } from '../../utils/gfetch'
import {  useParams } from 'react-router-dom'


 const ItemListContainer = () => {

 const [productos, setproductos] = useState([])
 const {idCategoria} = useParams();

  useEffect(()=>{
     if(idCategoria){
     getFetch().then( res=>{
      setproductos(res.filter(productos => productos.categoria === idCategoria  ))
    
    })
    .catch(error => console.log(error))
    .finally (console.log( "resolve de categoria"))
    }
    
     else{
      getFetch().then( resolve=>{
        setproductos(resolve)
      })
      .catch(error => console.log(error))
      .finally ()

     }
   
  },[idCategoria])

  return (
    <div >
      <ItemList clasName="container" productos={productos}/>
    </div>
  )
}

export default ItemListContainer