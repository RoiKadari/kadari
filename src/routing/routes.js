import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarAndSearch from './navbar';
import Homepage from '../pages/homepage/homepage';
import About from '../pages/about/about';
import Biography from '../pages/biography/biography';
import Stories from '../pages/stories/stories';
import Lectures from '../pages/lectures/lectures';
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
            {//<Route path="*" element={<NoMatch />} /> 
            } 
        </Routes>
        </BrowserRouter>
    )
};

export default Routing;