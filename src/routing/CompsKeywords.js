

import { catTitles, contacted } from "../pages/keywordsPages";


function ComponentBuilder(array){
     return (array.reduce((list, i) => ({...list, [i]: window[i]}), {}))
}


const keywordsComponents =
ComponentBuilder(contacted);


export default keywordsComponents;