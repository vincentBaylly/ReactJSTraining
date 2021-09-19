import Title from "./Title";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <Link to={"/"} className="navbar-brand">
        <Title title="LA BRUT" />
      </Link>
      <div className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to={"/"} className="nav-link">
            Accueil
          </Link>
        </li>
      </div>
      <div className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to={"/login"} className="nav-link">
            Connexion
          </Link>
        </li>
      </div>
      <div className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to={"/contact"} className="nav-link">
            Contact
          </Link>
        </li>
      </div>
    </nav>
  );
}

export default NavBar;
