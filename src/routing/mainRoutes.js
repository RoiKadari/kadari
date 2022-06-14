import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarAndSearch from './navbar';
import Homepage from '../pages/homepage/homepage';
import About from '../pages/about/about';
import Biography from '../pages/biography/biography';
import Stories from '../pages/stories/stories';
import Lectures from '../pages/lectures/main/lectures';
import Mediniyut from '../pages/lectures/main/mediniyut';
import Text331 from '../pages/lectures/331';
import KeyWordsListForSearch from '../lists-for-search/keywordsList';
import TextList from '../lists-for-search/textList';
//import NoMatch from '../pages/nomatch/nomatch';

   
const keyWordsEncoded = [];
KeyWordsListForSearch.forEach(i =>
    keyWordsEncoded.push(encodeURIComponent(i))

);
const titlesEncoded = [];
TextList.forEach(i =>
    titlesEncoded.push(encodeURIComponent(i))
);


const list = ["Homepage", "About", "Cool"];
const objlist = [];
list.forEach((element => objlist.push({"page": element})));
console.log(objlist);



// const renderPages = (page) => 
//     list.map((page) =>
//         <Route key={page} path={page} element={<h1>{decodeURIComponent(page)}</h1>} />,
//     );


const pages = [{ route: '/', page: Homepage }, { route: '/about', page: About }];



const Routing = () => {
 //useRoutes!!
    
    return(
        
        <BrowserRouter> 
            <NavbarAndSearch />
        <Routes>
            
            <Route path="about" element={<About />} />
            <Route path='biography' element={<Biography />} />
            <Route path='stories' element={<Stories />} />
            <Route path='lectures' element={<Lectures />} />
            <Route path='mediniyut' element={<Mediniyut/>} />
            <Route path='331' element={<Text331/>} />
    
    {pages.map(({route, page: Page}) =>
        <Route key={route} path={route} element={<Page />} />,
    )}


            {/* {renderPaths(keyWordsEncoded)}
            {renderPaths(titlesEncoded)} */}
            
            

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