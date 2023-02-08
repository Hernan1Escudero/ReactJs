
import ItemList from '../ItemList/ItemList'
import { useState } from 'react'
import { useEffect } from 'react'
import { getFetch } from '../../utils/gfetch'
import Item from '../Item/Item'
import { BrowserRouter, Routes } from 'react-router-dom'


 const ItemListContainer = () => {

 const [productos, setproductos] = useState([])

  useEffect(()=>{

    getFetch().then( resolve=>{
      setproductos(resolve)
    })
    .catch(error => console.log(error))
    .finally (console.log( "termino"))
  },[])
   console.log(productos[0])
  return (
      <div >
       <ItemList  productos={productos}/>
       
        {/*<Item producto ={productos[0]}/>*/}
      </div>
        )
}

export default ItemListContainer