import navComponents from './CompsNav';
import React from 'react';
import { keywordsCompsList } from '../lists-for-search/keywordsList';
import { fixedKwEncoded } from '../lists-for-search/keywordsList';
import keywordsComponents from './CompsKeywords';
import { textCompsList } from '../lists-for-search/textList';
import { fixedTxtEncoded } from '../lists-for-search/textList';
import textComponents from './CompsText';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarAndSearch from './navbar';
import Homepage from '../pages/homepage/homepage';
import { keyWords331 } from '../pages/lectures/331';


//import NoMatch from '../pages/nomatch/nomatch';


// const titlesEncoded = [];
// TextList.forEach(i =>
//     titlesEncoded.push(encodeURIComponent(i))
// );


function list(obj) {
    return Object.keys(obj);
};
const navCompsList = list(navComponents);



const pushedRoutes = [];
for (let i=0; i<navCompsList.length; i++) {
    pushedRoutes.push(<Route key={navCompsList[i]} path={navCompsList[i]} element={React.createElement(navComponents[navCompsList[i]])} />)
}
for (let i=0; i<keywordsCompsList.length; i++) {
    pushedRoutes.push(<Route key={fixedKwEncoded[i]} path={fixedKwEncoded[i]} element={React.createElement(keywordsComponents[keyWords331[i]])} />)    
}
for (let i=0; i<textCompsList.length; i++) {
    pushedRoutes.push(<Route key={fixedTxtEncoded[i]} path={fixedTxtEncoded[i]} element={React.createElement(textComponents[textCompsList[i]])} />)    
}


const Routing = () => {    
    return(
        <BrowserRouter> 
            <NavbarAndSearch />
        <Routes>
            <Route path='/' element={<Homepage/>} />
            {pushedRoutes}
            {//<Route path="*" element={<NoMatch />} /> 
            } 
        </Routes>
        </BrowserRouter>
    )
};


export default Routing;