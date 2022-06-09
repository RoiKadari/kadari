import './navbar.css'
import { Link } from 'react-router-dom';




const Navbar = () => {
    return (
        <div className="navStl bg-d-blue ph3 pv3 pv4-ns ph4-m ph5-l">
            <form id="frmSearch" method="get">
                <input id="txtSearch" type="text submit" className="mr3" placeholder="חיפוש"  />
            </form>
            <nav className="f6 fw6 tracked">
                <Link to="/" className="link dim white dib mr3">בית</Link>
                <Link to="/about" className="link dim white dib mr3">אודות</Link>
                <Link to="/biography" className="link dim white dib mr3">ביוגרפיה</Link>
                <Link to="/stories" className="link dim white dib mr3">סיפורים</Link>
                <Link to="/lectures" className="link dim white dib mr3">מאמרים</Link>      
            </nav>

            
        </div>
    )
};



export default Navbar; 
