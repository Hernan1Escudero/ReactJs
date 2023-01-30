import { useState } from 'react'
import Home from './components/HomeContainer/Home'

import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


function App() {
  

  return (
    <div className="App" >
     <Home>
      
      <ItemListContainer clasName="greet" greeting={"Bienvenidos"}/>
      </Home>
      
     </div>

  )
}

export default App
