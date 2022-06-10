import './navbar.css'
import React from 'react';
import { Link } from 'react-router-dom';
import Categories from '../lists-for-search/categories';
import LecturesList from '../lists-for-search/lecturesList';


const filteredOptions = (query, result) => {
    if (!query) {
      return result.filter((x) => x.includes(null)) ;
    }
    return result.filter((x) => x.includes(query));
  };


const Navigation = () => {
    return(
    <nav className="f6 fw6 tracked">
        <Link to="/" className="link dim white dib mr3">בית</Link>
        <Link to="/about" className="link dim white dib mr3">אודות</Link>
        <Link to="/biography" className="link dim white dib mr3">ביוגרפיה</Link>
        <Link to="/stories" className="link dim white dib mr3">סיפורים</Link>
        <Link to="/lectures" className="link dim white dib mr3">מאמרים</Link>      
    </nav>
    )
};



class NavbarAndSearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            query: (""),
            tags: Categories,
            lecturesNames: LecturesList
        };
    };
    render() {
        const { query } = this.state;
        const { tags } = this.state;
        const { lecturesNames } = this.state;
        
        if (!query) {
            return (
            <div className="navStl bg-d-blue ph3 pv3 pv4-ns ph4-m ph5-l">
                <form id="frmSearch" method="get">
                    <input id="txtSearch" type="text" className="mr3" placeholder="חיפוש"
                    onChange={(e) => {this.setState({ query: e.target.value });}} />
                </form>
                <Navigation/> 
            </div>

        )} else {
        return (
           <div className="navStl bg-d-blue ph3 pv3 pv4-ns ph4-m ph5-l">    
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
                    <br/><b>מאמרים </b><hr/>
                        {filteredOptions(query, lecturesNames).map((result, i) => (              
                            <a id="results" key={i} href={result}>
                                {result}<br/>
                            </a> 
                        ))}
                    </div>
                </form>
                <Navigation/>
            </div>
        )
        };
    };
};


export default NavbarAndSearch; 
