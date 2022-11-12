import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useAuth0 } from "@auth0/auth0-react";
import Door_caricature from "../images/Door_caricature.png";

function Login() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <Header />
      <div className="container-fluid text-center mt-3">
        <h1 className="display-6">Log in/Sign up for Quiz and more!</h1>
        <button
          type="button"
          className="btn btn-info m-4"
          onClick={() => loginWithRedirect()}
        >
          {" "}
          <div className="mt-1 mb-1"><img src={Door_caricature} className="img-fluid " alt="Door" /></div>
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
