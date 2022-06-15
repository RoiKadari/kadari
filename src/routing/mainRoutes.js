import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarAndSearch from './navbar';
import Components from './components';
import Text331 from '../pages/lectures/331';
import KeyWordsListForSearch from '../lists-for-search/keywordsList';
import TextList from '../lists-for-search/textList';
import Homepage from '../pages/homepage/homepage';
//import NoMatch from '../pages/nomatch/nomatch';

   
const keyWordsEncoded = [];
KeyWordsListForSearch.forEach(i =>

    keyWordsEncoded.push(encodeURIComponent(i))
);
const titlesEncoded = [];
TextList.forEach(i =>
    titlesEncoded.push(encodeURIComponent(i))
);


let list = Object.keys(Components);
let pushedRoutes = [];
const allRoutes = () => {
    for (let i=0; i<list.length; i++) {
        pushedRoutes.push(<Route key={list[i]} path={list[i]} element={React.createElement(Components[list[i]])} />)
        pushedRoutes.push(<Route key={keyWordsEncoded[i]} path={keyWordsEncoded[i]} element={React.createElement(Components[list[i]])} />)
       
    }
    return pushedRoutes;
}






const Routing = () => {
    
    return(
        
        <BrowserRouter> 
            <NavbarAndSearch />
        <Routes>
            <Route path='/' element={<Homepage/>} />
            <Route path='331' element={<Text331/>} />
            {allRoutes()}
            

            {//<Route path="*" element={<NoMatch />} /> 
            } 
        </Routes>
        </BrowserRouter>
    )
};




// let wordized = [];
// keyWordsEncoded.forEach(i =>
//     wordized.push(decodeURIComponent(i)),

// );
// console.log(wordized, keyWordsEncoded);



export default Routing;