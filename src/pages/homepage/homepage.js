import './homepage.css';
//import Dailyqoute from './dailyquote/dailyquote'
import bg from "./bg.jpg";
import shraga from "./shraga.jpg";
import hatima from "./hatima.jpg";


const Homepage = () => {

    return (
        <div id="homepage">
            <header className="Homepage-header BG-image">
            <div className='Icon-image'>
                <p className="title1">
                    שרגא קדרי
                </p>         
                <p className="title2">
                    הסופר ויצירתו
                </p>
                <p className="title3">
                תרס"ז - תשמ"ב &nbsp;&nbsp;
                1982 - 1907
                </p>
            </div>
            </header>
            <div>
                <img src={shraga} alt="" className='Shraga-img'/>
                <img src={hatima} alt="" className='Hatima-img'/>
                <img src={bg} alt="" className="Homepage-body"/>
            </div>
            {//<Dailyqoute />
            }
            <footer className="bg-d-blue"></footer>
        </div>
    )
};
  
export default Homepage;