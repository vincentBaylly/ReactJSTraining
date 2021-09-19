import React from "react";

function Login() {
  return (
    <div className="col-md-6 col-lg-7 d-flex align-items-center">
      <div className="card-body p-4 p-lg-5 text-black">
        <form>
          <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: `1px;` }}>
            Connectez-vous à votre compte
          </h5>

          <div className="form-outline mb-4">
            <input
              type="email"
              id="form2Example17"
              className="form-control form-control-lg"
            />
            <label className="form-label" for="form2Example17">
              Identifiant
            </label>
          </div>

          <div className="form-outline mb-4">
            <input
              type="password"
              id="form2Example27"
              className="form-control form-control-lg"
            />
            <label className="form-label" for="form2Example27">
              Mot de passe
            </label>
          </div>

          <div className="pt-1 mb-4">
            <button className="btn btn-dark btn-lg btn-block" type="button">
              Connexion
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
