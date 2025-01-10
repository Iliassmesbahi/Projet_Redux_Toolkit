import { useState } from "react"
import { useDispatch } from "react-redux"
import { ajoute } from "./tutoSlice"
import { Link } from "react-router-dom"
const Ajouter=()=>{
const [code,setCode]=useState('')
const [titre,setTitre]=useState('')
const [description,setDescription]=useState('')
const dispatch=useDispatch()
const handleSubmit=(e)=>{
    e.preventDefault()
dispatch(ajoute( {
    code: code,
    titre: titre,
    description: description,
    },))
}
    return<>
    <div className="container mt-4">
      <h2>Nouveau Tutoriel</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Code</label>
          <input
            type="number"
            className="form-control"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Entrez le code du tutoriel"
          />
        </div>
        <div className="form-group">
          <label>Titre</label>
          <input
            type="text"
            className="form-control"
            value={titre}
            onChange={(e) => setTitre(e.target.value)}
            placeholder="Entrez le titre du tutoriel"
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Entrez la description du tutoriel"
          ></textarea>
        </div>
        <Link to="/a/Tous">
        <button type="submit" className="btn btn-primary mt-3">
          Ajouter
        </button></Link>
      </form>
    </div>
    </>
}
export default Ajouter;