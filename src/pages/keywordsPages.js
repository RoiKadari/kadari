import { keyWords331 } from "./lectures/331";


export const catTitles =
keyWords331.forEach(element =>
    window[element] =()=>{return (<h1>קטגוריה: {element} </h1>)});

   
  
    

