
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
      <Route path='/' element={ <ItemListContainer/>}/>
      <Route path='/Category' element={ <ItemListContainer/>}/>
      <Route path='/detail' element={ <ItemDetailContainer/>}/>
      </Routes>
      </BrowserRouter>

    </>

  )
}

export default App
