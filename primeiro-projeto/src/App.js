import React, {useEffect} from "react";
import tmdb from "./tmdb";

export default () => {   
  
  useEffect(()=> {

    const carregarTudo =async ()=> {
      let list = await tmdb.getHomeList
    }

    carregarTudo();

    },  []);
  
  return (<div>Olá, mundo!</div>);  
 }