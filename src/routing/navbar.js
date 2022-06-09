import './navbar.css'
import { Link } from 'react-router-dom';

/*
    const Search = () => {
    document.getElementById('frmSearch').onsubmit = function() {
        window.location = 'http://www.google.com/search?q=site:ynet.co.il' + document.getElementById('txtSearch').value;
        return false;
    }
}
*/


const Navbar = () => {
    return (
        <div className="navStl bg-d-blue ph3 pv3 pv4-ns ph4-m ph5-l">
            <nav className="f6 fw6 tracked">
                <Link to="/" className="link dim white dib mr3">בית</Link>
                <Link to="/about" className="link dim white dib mr3">אודות</Link>
                <Link to="/biography" className="link dim white dib mr3">ביוגרפיה</Link>
                <Link to="/stories" className="link dim white dib mr3">סיפורים</Link>
                <Link to="/lectures" className="link dim white dib mr3">מאמרים</Link>
                <form id="frmSearch" method="get" action="default.html" />
                
            </nav><input id="txtSearch" type="text submit" className="mr3" placeholder="חיפוש"  />
        </div>
    )
};



export default Navbar; 
