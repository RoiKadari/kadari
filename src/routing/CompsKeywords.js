

import { catTitles } from "../pages/keywordsPages";
import { keyWords331 } from "../pages/lectures/331";

function ComponentBuilder(array){
     return (array.reduce((list, i) => ({...list, [i]: window[i]}), {}))
}

const keywordsComponents =
ComponentBuilder(keyWords331);




export default keywordsComponents;