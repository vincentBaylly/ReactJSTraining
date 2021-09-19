import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Title from "./components/Section/Title";
import Home from "./views/Home";
import DashUser from "./views/DashUser";
import Contact from "./views/Contact";
import ProductItem from "./components/Product/ProductItem";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
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
              <Link to={"/user"} className="nav-link">
                Profile
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
        <main className="container">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/user">
              <DashUser />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
