import textComponents from "../routing/CompsText";


function list(obj) {
    return Object.keys(obj);
};
export const textCompsList = list(textComponents);



let textEncoded = [];
textCompsList.forEach(i =>
    textEncoded.push(encodeURIComponent(i)),
);

const fixedTxtEncdQts = textEncoded.map(item => item.replace(/ii/g, '%22'));
export const fixedTxtEncoded = fixedTxtEncdQts.map(item => item.replace(/_/g, '%20'));


const AllText = [];
fixedTxtEncoded.forEach(i =>
    AllText.push(decodeURIComponent(i)),
);


export default AllText;