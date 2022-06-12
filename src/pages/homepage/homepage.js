import './homepage.css';
//import Dailyqoute from './dailyquote/dailyquote'

// let i = 1;
// function myLoop() { 
//   setTimeout(function() {
//     console.log('Hello! I am an infinite loop and my job is to make sure that the app wont get unloaded from the Heroku server.');
//     i++;
//     if (i < 10) {
//       myLoop();
//     }
//   }, 10000)
// }

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
            <div className="Homepage-body">
                <div alt="shraga" className='Shraga-img'/>
            </div>
            {//<Dailyqoute />
            }
        </div>
    )
};
  
export default Homepage;