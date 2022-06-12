import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarAndSearch from './navbar';
import Homepage from '../pages/homepage/homepage';
import About from '../pages/about/about';
import Biography from '../pages/biography/biography';
import Stories from '../pages/stories/stories';
import Lectures from '../pages/lectures/main/lectures';
import Mediniyut from '../pages/lectures/main/mediniyut';
import Lecture331  from '../pages/lectures/331';
//import NoMatch from '../pages/nomatch/nomatch';

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
            <Route path='331' element={<Lecture331/>} />
            {//<Route path="*" element={<NoMatch />} /> 
            } 
        </Routes>
        </BrowserRouter>
    )
};

export default Routing;