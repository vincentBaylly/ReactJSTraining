import Title from "./Title";
import { Link } from "react-router-dom";
import { auth } from "../../services/firebase";
import { signOut } from "firebase/auth";

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
          <Link to={"/contact"} className="nav-link">
            Contact
          </Link>
        </li>
      </div>{" "}
      {auth.currentUser ? (
        <div className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-item nav-link mr-3" to="/dashuser">
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <button
              className="btn btn-primary mr-3"
              onClick={() => signOut(auth)}
            >
              Deconnexion
            </button>
          </li>
        </div>
      ) : (
        <div className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to={"/signup"} className="nav-link">
              Inscription
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/login"} className="nav-link">
              Connexion
            </Link>
          </li>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
