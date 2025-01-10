import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { recherche } from "./tutoSlice";
import { UNSAFE_useRouteId } from "react-router-dom";

const Recherche=()=>{
    const list=useSelector(state=>state.tut.list1)
    const dispatch=useDispatch()
    const [rech,setRech]=useState('')
    const handle=(e)=>{
e.preventDefault()
dispatch(recherche(rech))
    }
    return<>
    <form onSubmit={handle}>
    <input type="text" placeholder="Recherche" onChange={(e)=>setRech(e.target.value)}/>
    <button type="submit">Recherche</button>
    </form>
    
    {list && list.map((e,i)=>{

        return(<>
        <table key={i} border={1}>
        <tr>
              <th>Code</th>
              <th>Titre</th>
              <th>Description</th>
              
        </tr>
        <tr>
            <td>{e.code}</td>
            <td>{e.titre}</td>
            <td>{e.description}</td>
        </tr>
        </table>
        </>) 
    })}
    </>
}

export default Recherche;  
