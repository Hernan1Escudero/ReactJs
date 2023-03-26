import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"

import './NavBar.css'

const NavBar = ( ) => {
  
  return (
  
    <div className="">
    <header>
        <div className="row flexOnQuery withBackground m-0">
          <div className="col m-0 p-1">
            <div className="secondBackground p-2 m-0">
             <Link to='/'><h1 className="text-center text-white">New Feel</h1></Link>
              
            </div>
          </div>
        </div>
      
      </header>
    <nav className="navbar navbar-expand bg-light d-flex flex-row ">
   
    <div className="container-fluid">
      <a className="navbar-brand" href="#"></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav  ">
          <li className="nav-item "><Link to='/Categoria/Masajes' className="nav-link active" aria-current="page" href="#">Masajes</Link>
          </li>
          <li className="nav-item">
          <Link to='/Categoria/Depilacion' className="nav-link active" aria-current="page" href="#">Depilacion</Link></li>
          <li className="nav-item dropdown">
          
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Spa
            </a>
            <ul className="dropdown-menu">
             <li><Link to='/Categoria/Spa' className="nav-link active " aria-current="page" href="#">Spa-ñol</Link></li> 
              <li><a className="dropdown-item" href="#">Rejuvenecimiento</a></li>
              
              <li><a className="dropdown-item" href="#">Quirurgicos</a></li>
            </ul>
          </li>
          <li className="nav-item" >

          </li>
        </ul>
        
      </div>
      <div className="cartWidget  "><CartWidget/>1</div>
    </div>
  </nav>
  </div>


  )
}

export default NavBar
