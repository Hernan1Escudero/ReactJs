
import CartWidget from "../CartWidget/CartWidget"

import './NavBar.css'
const NavBar = ( ) => {
  return (
    <div className="">
    <header>
        <div class="row flexOnQuery withBackground m-0">
          <div class="col m-0 p-1">
            <div class="secondBackground p-2 m-0">
              <h1 class="text-center text-white">New Feel</h1>
            </div>
          </div>
        </div>
      
      </header>
    <nav className="navbar navbar-expand bg-light  ">
   
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Menú</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav  ">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Servicios
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Masajes</a></li>
              <li><a className="dropdown-item" href="#">Rejuvenecimiento</a></li>
              
              <li><a className="dropdown-item" href="#">Quirurgicos</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <div className="cartWidget"><CartWidget/>1</div>
            

          </li>
        </ul>
        
      </div>
    </div>
  </nav>
  </div>


  )
}

export default NavBar
