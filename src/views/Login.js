import React, { useState } from "react";
import { signIn, signinWithFaceBook } from "../helper/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = async (e) => {
    setEmail(e.target.value);
  };

  const handlePassChange = async (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    signIn(email, password)
      .then(function (result) {
        var user = result.user;
        console.log(user);
        // ...
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error(`${errorCode} ${errorMessage}`);
      });
  };

  const handleFacebookLogin = (e) => {
    e.preventDefault();
    signinWithFaceBook()
      .then(function (result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(user);
        // ...
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error(`${errorCode} ${errorMessage}`);
      });
  };

  return (
    <div className="col-md-9 col-lg-7 d-flex align-items-center">
      <div className="card-body p-4 p-lg-5 text-black">
        <form>
          <h5 className="fw-normal mb-3 pb-3">Connectez-vous à votre compte</h5>

          <div className="form-outline mb-4">
            <input
              type="email"
              id="form2Example17"
              className="form-control form-control-lg"
              onChange={handleEmailChange.bind(this)}
              value={email}
            />
            <label className="form-label" htmlFor="form2Example17">
              Identifiant
            </label>
          </div>

          <div className="form-outline mb-4">
            <input
              type="password"
              id="form2Example27"
              className="form-control form-control-lg"
              onChange={handlePassChange.bind(this)}
              value={password}
            />
            <label className="form-label" htmlFor="form2Example27">
              Mot de passe
            </label>
          </div>

          <div className="md-6 is-grouped">
            <button
              className="btn btn-dark btn-lg btn-block"
              onClick={handleLogin}
              type="button"
            >
              Connexion
            </button>
            <button
              onClick={handleFacebookLogin}
              id="facebook-button"
              className="btn btn-default btn-block btn-social btn-facebook pull-right"
            >
              <i className="fa fa-facebook"></i> Sign in with Facebook
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
