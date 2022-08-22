

import { catTitles } from "../pages/keywordsPages";
import { keyWords13 } from "../pages/lectures/13";
import { keyWords331 } from "../pages/lectures/331";

function ComponentBuilder(array){
     return (array.reduce((list, i) => ({...list, [i]: window[i]}), {}))
}

const keywordsComponents =
ComponentBuilder(keyWords13 & keyWords331);




export default keywordsComponents;