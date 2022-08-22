import keywordsComponents from "../routing/CompsKeywords";
import { keyWords331 } from "../pages/lectures/331";
import { keyWords13 } from "../pages/lectures/13";


function list(obj) {
    return Object.keys(obj);
};
export const keywordsCompsList = list(keywordsComponents);



const keyWordsEncoded = [];

keyWords13.forEach(i =>
    keyWordsEncoded.push(encodeURIComponent(i)));
keyWords331.forEach(i =>
    keyWordsEncoded.push(encodeURIComponent(i)));

export const fixedKwEncoded = keyWordsEncoded.map(item => item.replace(/_/g, '%20'))



const AllKeyWords = [];
fixedKwEncoded.forEach(i =>
    AllKeyWords.push(decodeURIComponent(i)),
);


export default AllKeyWords;