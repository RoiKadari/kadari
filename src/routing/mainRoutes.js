import navComponents from './CompsNav';
import React from 'react';
import { fixedKwEncoded } from '../lists-for-search/keywordsList';
import keywordsComponents from './CompsKeywords';
import { keywordsCompsList } from '../lists-for-search/keywordsList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarAndSearch from './navbar';
import Homepage from '../pages/homepage/homepage';
import Text331 from '../pages/lectures/331';

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
    pushedRoutes.push(<Route key={fixedKwEncoded[i]} path={fixedKwEncoded[i]} element={React.createElement(keywordsComponents[keywordsCompsList[i]])} />)    
}


const Routing = () => {    
    return(
        <BrowserRouter> 
            <NavbarAndSearch />
        <Routes>
            <Route path='/' element={<Homepage/>} />
            <Route path='331' element={<Text331/>} />
            {pushedRoutes}

            {//<Route path="*" element={<NoMatch />} /> 
            } 
        </Routes>
        </BrowserRouter>
    )
};


export default Routing;