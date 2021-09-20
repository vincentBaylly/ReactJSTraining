import React, { useState } from "react";
import { signUp } from "../helper/auth";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = async (e) => {
    setEmail(e.target.value);
  };

  const handlePassChange = async (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    signUp(email, password)
      .then(function (result) {
        //TODO Manage token
        //console.log(result.user.accessToken);
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
    <div className="col-md-6 col-lg-7 d-flex align-items-center">
      <div className="card-body p-4 p-lg-5 text-black">
        <form>
          <h5 className="fw-normal mb-3 pb-3">Inscrivez-vous à notre site</h5>

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

          <div className="form-outline mb-4">
            <input
              type="password"
              id="form2Example27"
              className="form-control form-control-lg"
            />
            <label className="form-label" htmlFor="form2Example27">
              Confirmation de Mot de passe
            </label>
          </div>

          <div className="pt-1 mb-4">
            <button
              onClick={handleSubmit.bind(this)}
              className="btn btn-dark btn-lg btn-block"
              type="button"
            >
              Inscription
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
