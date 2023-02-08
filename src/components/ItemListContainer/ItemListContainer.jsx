
import ItemList from '../ItemList/ItemList'
import { useState } from 'react'
import { useEffect } from 'react'
import { getFetch } from '../../utils/gfetch'
import Item from '../Item/Item'
import { BrowserRouter, Routes, useParams } from 'react-router-dom'


 const ItemListContainer = () => {

 const [productos, setproductos] = useState([])
 const {idCategoria} = useParams();


  useEffect(()=>{
     if(idCategoria){
     getFetch().then( res=>{
      setproductos(res.filter(productos => productos.categoria === idCategoria  ))
    
    })
    .catch(error => console.log(error))
    .finally (console.log( "resolve de categoria"))}
     else{
      getFetch().then( resolve=>{
        setproductos(resolve)
      })
      .catch(error => console.log(error))
      .finally (console.log( "termino"))

     }
   
  },[idCategoria])

  return (
      <div >
       <ItemList clasName="Container" productos={productos}/>
       
        {/*<Item producto ={productos[0]}/>*/}
      </div>
        )
}

export default ItemListContainer