import { BrowserRouter,Route,Routes } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import Ajouter from "./ajoute"
import Recherche from "./recherche"
import List from "./list"
import Modifier from "./modifier"
const Total=()=>{

  return<>
  <ul>
    
    <li><Link to="/">List</Link></li>
    <li><Link to="/ajouter">Ajouter</Link></li>
    <li><Link to="/a/recherche">Recherche</Link></li>
    
</ul>
    <Routes>
        <Route path="/" element={<List/>}></Route>
        <Route path="/ajouter" element={<Ajouter/>}></Route>
        <Route path="/a/recherche" element={<Recherche/>}></Route>
        <Route path="/a/b/modifier/:id" element={<Modifier/>}></Route>
        
        </Routes>
  

  </>
}
export default Total;