
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/itemDetailContainer';

function App() {
 
  return (
     <>
      <BrowserRouter>
     <NavBar/>
      <Routes>
      <Route exact path='' element={ <ItemListContainer/>}/>
      <Route path='/Categoria/:idCategoria' element={ <ItemListContainer/>}/>
      <Route path='/detail/:idProducto' element={ <ItemDetailContainer/>}/>
      </Routes>
      </BrowserRouter > 

    </>

  )
}

export default App
