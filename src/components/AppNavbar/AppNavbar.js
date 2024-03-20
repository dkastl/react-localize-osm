
import Navbar from "react-bootstrap/Navbar";
import "./AppNavbar.css";
import packageJson from '../../package.alias.json';
import UserLoggedIn from "./UserLoggedIn";
import UserLoggedOut from "./UserLoggedOut";
import LanguageSwitcher from "./LanguageSwitcher";
//import logo from "../../assets/logo.svg";

export default function AppNavbar({user, login, logout, loading}) {

    return (
        <Navbar 
            variant="light"
            bg="white"
        >
            <Navbar.Brand className="mr-auto">
              OSM Localization Tool (OsmLT)   <span className="version">v{packageJson["version"]} by <a href="https://www.tracestrack.com/opensource/">Tracestrack</a></span>
            </Navbar.Brand>
            <LanguageSwitcher />
        {user.loggedIn ? 
            <UserLoggedIn 
                logout={logout} 
                user={user} 
            />
            : <UserLoggedOut 
                login={login} 
                loading={loading} 
            />
        }
        </Navbar>
    );
}
