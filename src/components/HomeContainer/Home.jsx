import NavBar from "../Nav/NavBar"
const Home = ({children}) => {
  console.log(children)
  return (
   
    <div>
      
    <NavBar/>
    {children}
    
    </div>

  )
}

export default Home