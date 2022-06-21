import "./lectures.css";
import pray from "./images/pry.jpg";
import kid from "./images/edu.jpg";
import flag from "./images/flg.jpg";


const Lectures = () => {

  return (
    <div className="mainDiv">
      <div className="card">
        <a href="emunah"><img src={pray} alt="" className="lecImg"/>
          <header className="subject">אמונה</header></a>
      </div>
      <div className="card">
        <a href="chinuch"><img src={kid} alt="" className="lecImg"/> 
        <header className="subject">חינוך</header></a>
      </div>
      <div className="card">
        <a href="mediniyut"><img src={flag} alt="" className="lecImg"/>
        <header className="subject">מדיניות</header></a>
      </div>
    </div>
  );
};
 
      
export default Lectures;