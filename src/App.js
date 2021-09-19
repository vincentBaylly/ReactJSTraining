import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import DashUser from "./views/DashUser";
import Contact from "./views/Contact";
import Login from "./views/Login";
import NavBar from "./components/Section/NavBar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/user">
              <DashUser />
            </Route>
            <Route path="/login">
              <Login />
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
