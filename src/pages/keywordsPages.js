import { keyWords331 } from "./lectures/331";
import { keyWords13 } from "./lectures/13";

const contacted = keyWords13.concat(keyWords331);
console.log(contacted);
export const catTitles = 
contacted.forEach(element =>
    window[element] =()=>{return (<h1>קטגוריה: {element} </h1>)}) 



   
  
    

