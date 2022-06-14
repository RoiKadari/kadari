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

   
let keyWordsEncoded = [];
KeyWordsListForSearch.forEach(i =>
    keyWordsEncoded.push(encodeURIComponent(i))

);
let titlesEncoded = [];
TextList.forEach(i =>
    titlesEncoded.push(encodeURIComponent(i))
);


let page = [];

const renderPaths = (paths) => 
    paths.map((path) =>
        <Route key={path} path={path} element={<h1>{decodeURIComponent(path)}</h1>} />,
        paths.map((path) =>   
            page.push(decodeURIComponent(path))
        )
    );

const edit = () => {
    for (let i=0; i<10; i++) {
        page[i]="<"+page[i]+" />"
    }
};

    

// const renderElements = (elements) =>
//     elements.map((page) =>
    
//         /</
//         (page)
//         /
//         />/

//     );


const Routing = () => {
    
    return(
        
        <BrowserRouter> 
            <NavbarAndSearch />
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="about" element={<About />} />
            <Route path='biography' element={<Biography />} />
            <Route path='stories' element={<Stories />} />
            <Route path='lectures' element={<Lectures />} />
            <Route path='mediniyut' element={<Mediniyut/>} />
            <Route path='331' element={<Text331/>} />


            {renderPaths(keyWordsEncoded)}
            {renderPaths(titlesEncoded)}
            {edit()}
            {console.log(page[0])}
            

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