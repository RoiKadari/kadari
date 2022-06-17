import textComponents from "../routing/CompsText";


function list(obj) {
    return Object.keys(obj);
};
export const textCompsList = list(textComponents);


const textEncoded = [];
textCompsList.forEach(i =>
    textEncoded.push(encodeURIComponent(i)));
export const fixedTxtEncoded = textEncoded.map(item => item.replace(/_/g, '%20'))


const AllText = [];
fixedTxtEncoded.forEach(i =>
    AllText.push(decodeURIComponent(i)),
);


export default AllText;