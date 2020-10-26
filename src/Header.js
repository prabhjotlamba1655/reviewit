import './Header.css';
import {Link} from "react-router-dom";
import logo from "./logo.png"

function Header() {
    return (
        <div>
            <h1>Testing</h1>
            <Link to="/DeveloperLogin">
                <img src={logo} alt="Alternate txt OP"></img>
            </Link>
        </div>
    )
}

export default Header;
