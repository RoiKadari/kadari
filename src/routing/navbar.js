import './navbar.css'
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import AllKeyWords from '../lists-for-search/keywordsList';
import AllText from '../lists-for-search/textList';


const filteredOptions = (query, result) => {
    if (!query) {
      return result.filter((x) => x.includes(null)) ;
    }
    return result.filter((x) => x.includes(query));
  };


const hamburgerIcon =
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>


const Navigation = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    //Mobile Mode
    if (navigator.userAgentData.mobile === true) { 
    return(
        <nav className='f6 fw6 tracked'>
            <span onClick={()=>(setIsNavExpanded(!isNavExpanded))} className={isNavExpanded ? "hamburger2" : "hamburger1"}>
                { hamburgerIcon }
            </span>
            <div id="linkdiv" className={isNavExpanded ? "mobile-menu-expanded" : "mobile-menu"} onClick={()=>{setIsNavExpanded(false)}}>
            <ul>
                <Link to="/" className="link  d-blue">בית</Link><br/>
                <Link to="/about" className="link  d-blue">אודות</Link><br/>
                <Link to="/biography" className="link  d-blue">ביוגרפיה</Link><br/>
                <Link to="/stories" className="link  d-blue">סיפורים</Link><br/>
                <Link to="/lectures" className="link fw6 d-blue">מאמרים</Link><br/> 
                <Link to="/pictures" className="link  d-blue">תמונות</Link>
            </ul>
            </div>
        </nav>
    )} else {
        //Computer Mode
    return(
        <nav className='f6 fw6 tracked'>
            <Link to="/" className="link dim white dib mr3">בית</Link>
            <Link to="/about" className="link dim white dib mr3">אודות</Link>
            <Link to="/biography" className="link dim white dib mr3">ביוגרפיה</Link>
            <Link to="/stories" className="link dim white dib mr3">סיפורים</Link>
            <Link to="/lectures" className="link dim white dib mr3">מאמרים</Link>
            <Link to="/pictures" className="link dim white dib mr3">תמונות</Link>      
        </nav>
    )};
};



class NavbarAndSearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            query: (""),
            tags: AllKeyWords,
            lecturesNames: AllText
        };
    };
    render() {
        const { query } = this.state;
        const { tags } = this.state;
        const { lecturesNames } = this.state;
        //when the search is not triggered
        if (!query) {
            //Mobile Mode          
            if (navigator.userAgentData.mobile === true) {
                return (
                    <div className="bg-d-blue ph3 pv3 pv4-ns ph4-m ph5-l large-bar">
                        <form id="frmSearch" method="get">
                            <input id="txtSearch" type="text" className="large-search" placeholder="  חיפוש"
                            onChange={(e) => {this.setState({ query: e.target.value });}} />
                        </form>
                        <Navigation /> 
                    </div>
                )} else {
                    //Computer Mode
                return (
                <div className="bg-d-blue ph3 pv3 pv4-ns ph4-m ph5-l">
                    <form id="frmSearch" method="get">    
                        <input id="txtSearch" type="text" className="mr3" placeholder="חיפוש"
                        onChange={(e) => {this.setState({ query: e.target.value });}} />
                    </form>
                    <Navigation /> 
                </div>
                )}
        //when the search is triggered
        } else {
            //Mobile Mode
            if (navigator.userAgentData.mobile === true) {                 
            return (
                <div className="bg-d-blue ph3 pv3 pv4-ns ph4-m ph5-l large-bar">    
                    <form id="frmSearch" method="get">
                        <input id="txtSearch" type="text" className="large-search" placeholder="חיפוש"
                        onChange={(e) => {this.setState({ query: e.target.value });}} />
                        <div className="large-results">
                        <b>מילות מפתח</b><hr/>
                            {filteredOptions(query, tags).map((result, i) => (              
                                <a id="results" key={i} href={result}>
                                    {result}<br/>
                                </a> 
                            ))}
                        <br/><b>מאמרים וסיפורים</b><hr/>
                            {filteredOptions(query, lecturesNames).map((result, i) => (              
                                <a id="results" key={i} href={result}>
                                    {result}<br/>
                                </a> 
                            ))}
                        </div>
                    </form>
                    <Navigation/>
                </div>
            )} else {
            // Computer Mode
            return (
                <div className="bg-d-blue ph3 pv3 pv4-ns ph4-m ph5-l">    
                    <form id="frmSearch" method="get">
                        <input id="txtSearch" type="text" className="mr3" placeholder="חיפוש"
                        onChange={(e) => {this.setState({ query: e.target.value });}} />
                        <div className="resultsStl">
                        <b>מילות מפתח</b><hr/>
                            {filteredOptions(query, tags).map((result, i) => (              
                                <a id="results" key={i} href={result}>
                                    {result}<br/>
                                </a> 
                            ))}
                        <br/><b>מאמרים וסיפורים</b><hr/>
                            {filteredOptions(query, lecturesNames).map((result, i) => (              
                                <a id="results" key={i} href={result}>
                                    {result}<br/>
                                </a> 
                            ))}
                        </div>
                    </form>
                    <Navigation/>
                </div>
            )};
        };
    };
};


export default NavbarAndSearch; 
