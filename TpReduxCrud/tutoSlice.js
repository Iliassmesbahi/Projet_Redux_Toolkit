import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

const createtuto=createSlice({
name:'list',
initialState:{
    code:0,
    list:[
        {
        code: 111,
        titre: "Initiation en Javascript",
        description: "Tutoriel pour les débutants (16 heures)",
        },
        {
        code: 112,
        titre: "React Redux",
        description: "Concepts de base en Redux et démonstration en @redux/jsToulkit",
        },
        {
        code: 115,
        titre: "Algorithmique",
        description:
        "Premier pas au monde du développement avec seulement 10 heures",
        },
        ],
    recherche:'',
    list1:[]
},
 reducers:{
    ajoute:(state,action)=>{
        const {code,titre,description}=action.payload
        state.list.push(action.payload)
    },
modifier:(state,action)=>{
    const p = state.list.find((e) => {
    return e.code === action.payload.code;
});

    if(p){
        p.titre=action.payload.titre
        p.description=action.payload.description
    }
},
supprime:(state,action)=>{
   const win= window.confirm("correct")
   if(win){
    state.list=state.list.filter((e)=>e.code!=action.payload.code)
   }
    
},
recherche:(state,action)=>{
    state.list1=state.list.filter((e)=>e.titre==action.payload)
},

handleCode:(state,action)=>{
    state.list=state.list.filter((e)=>{return e.code !== action.payload})
}
 }
})
export const {ajoute,modifier,supprime,recherche,handleCode} =createtuto.actions;
export default createtuto.reducer;