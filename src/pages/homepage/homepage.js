import './homepage.css';
//import Dailyqoute from './dailyquote/dailyquote'

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
            </div>
            </header>
            <div className="Homepage-body" />
            {//<Dailyqoute />
            }
        </div>
    )
};
  
export default Homepage;