import Homepage from "../pages/homepage/homepage";
import About from '../pages/about/about';
import Biography from '../pages/biography/biography';
import Stories from "../pages/lectures/main/stories";
import Lectures from '../pages/lectures/main/lectures';
import Emunah from "../pages/lectures/main/emunah";
import Chinuch from "../pages/lectures/main/chinuch";
import Mediniyut from '../pages/lectures/main/mediniyut';

function ComponentBuilder(array){
    return (array.reduce((list, i) => ({...list, [i]: window[i]}), {}))
}

const navComponents = {
    Homepage,
    About,
    Biography,
    Lectures,
    Stories,
    Emunah,
    Chinuch,
    Mediniyut,
     
    
};

export default navComponents;