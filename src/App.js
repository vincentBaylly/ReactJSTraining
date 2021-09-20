import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import DashUser from "./views/DashUser";
import Contact from "./views/Contact";
import Login from "./views/Login";
import SignUp from "./views/SignUp";
import NavBar from "./components/Section/NavBar";
import { auth } from "./services/firebase";
import PrivateRoute from "./components/Route/PrivateRoute";
import PublicRoute from "./components/Route/PublicRoute";

function App() {
  const [loading, setLoading] = useState(true);
  const [authenticated, isAuthenticated] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        isAuthenticated(true);
        setLoading(false);
      } else {
        isAuthenticated(false);
        setLoading(false);
      }
    });
  }, []);

  return loading === true ? (
    <div className="spinner-border text-success" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  ) : (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <PrivateRoute
              path="/dashuser"
              authenticated={authenticated}
              component={DashUser}
            />
            <PublicRoute
              path="/signup"
              authenticated={authenticated}
              component={SignUp}
            />
            <PublicRoute
              path="/login"
              authenticated={authenticated}
              component={Login}
            />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
