import './homepage.css';
//import Dailyqoute from './dailyquote/dailyquote'
import bg from "./bg.jpg"


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
                1982 - 1907
                </p>
            </div>
            </header>
            <div>
                <div alt="shraga" className='Shraga-img'/>
                <div alt="hatima" className='Hatima-img'/>
                <img src={bg} alt="" className="Homepage-body"/>
            </div>
            {//<Dailyqoute />
            }
        </div>
    )
};
  
export default Homepage;