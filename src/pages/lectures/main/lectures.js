import "./lectures.css";
import pray from "./s.jpg";
import kid from "./ed.jpg"
import flag from "./flg.jpg"


const Lectures = () => {

  return (
    <div className="mainDiv">
      <div className="card">
        <a href="emunah"><img src={pray} alt="" className="lecImg"/>
          <header className="App-Category subject">אמונה</header></a>
      </div>
      <div className="card">
        <a href="chinuch"><img src={kid} alt="" className="lecImg"/> 
        <header className="App-Category subject">חינוך</header></a>
      </div>
      <div className="card">
        <a href="mediniyut"><img src={flag} alt="" className="lecImg"/>
        <header className="App-Category subject">מדיניות</header></a>
      </div>
    </div>
  );
};
 
      
export default Lectures;