import keywordsComponents from "../routing/CompsKeywords";
import { keyWords331 } from "../pages/lectures/331";


function list(obj) {
    return Object.keys(obj);
};
export const keywordsCompsList = list(keywordsComponents);

const keyWordsEncoded = [];
keyWords331.forEach(i =>
    keyWordsEncoded.push(encodeURIComponent(i)));
export const fixedKwEncoded = keyWordsEncoded.map(item => item.replace(/_/g, '%20'))


const AllKeyWords = [];
fixedKwEncoded.forEach(i =>
    AllKeyWords.push(decodeURIComponent(i)),
);


export default AllKeyWords;