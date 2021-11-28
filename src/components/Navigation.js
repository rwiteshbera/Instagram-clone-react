import "../styles/navigations.scss";
import logo from "../images/instagram-logo.png";
import search from "../images/search.png";
import Menu from "../components/Menu.js";

const Navigation = () => {
    return (
            <>
                <div className="navigation">
                    <div className="container">
                        <img src={logo} alt="instagram-logo" className="logo" />
                        <div className="search">
                            <img src={search} alt="search icon" className="search-icon" />
                            <span className="search-text">Search</span>
                        </div>
                        <Menu />
                    </div>
                </div>
            </>
    )
}

export default Navigation;
