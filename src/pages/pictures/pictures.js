import "./pictures.css";
import book1 from "./books/ממרתף.jpeg";
import book2 from "./books/אסונה.jpeg";
import book3 from "./books/עיניים.jpeg";
import book4 from "./books/עץ.jpeg";
import book5 from "./books/מי.jpeg";
import book6 from "./books/מגילת.jpeg";
import book7 from "./books/שזופי.jpeg";
import book8 from "./books/פרופסור.jpeg";
import book9 from "./books/וצאן.jpeg";
import book10 from "./books/והבוקר.jpeg";
import book11 from "./books/בית.jpeg";
import book12 from "./books/ירושלים.jpeg";
import book13 from "./books/ולירושלים.jpeg";

const Pictures = () => {
    //Mobile Mode
    if (navigator.userAgentData.mobile === true) { 
    return(
        <div className="books-mobile">
        <img src={book1} alt=""/>
        <img src={book2} alt=""/>
        <img src={book3} alt=""/>
        <img src={book4} alt=""/>
        <img src={book5} alt=""/>
        <img src={book6} alt=""/>
        <img src={book7} alt=""/>
        <img src={book8} alt=""/>
        <img src={book9} alt=""/>
        <img src={book10} alt=""/>
        <img src={book11} alt=""/>
        <img src={book12} alt=""/>
        <img src={book13} alt=""/>
    </div>
    )} else {

    //Computer Mode

    return (
        <div className="books-computer">
            <img src={book1} alt=""/>
            <img src={book2} alt=""/>
            <img src={book3} alt=""/>
            <img src={book4} alt=""/>
            <img src={book5} alt=""/>
            <img src={book6} alt=""/>
            <img src={book7} alt=""/>
            <img src={book8} alt=""/>
            <img src={book9} alt=""/>
            <img src={book10} alt=""/>
            <img src={book11} alt=""/>
            <img src={book12} alt=""/>
            <img src={book13} alt=""/>
        </div>
    )}
};


export default Pictures;