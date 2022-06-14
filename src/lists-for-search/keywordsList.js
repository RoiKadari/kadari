import { keyWords331 } from "../pages/lectures/331";

const allKeyWords =

    keyWords331 


;


//remove doubles from different pages
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
};
const KeyWordsListForSearch = allKeyWords.filter(onlyUnique);


export default KeyWordsListForSearch;