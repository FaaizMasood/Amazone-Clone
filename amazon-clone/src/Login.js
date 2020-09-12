import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://www.nysenate.gov/sites/default/files/press-release/social/amazon.jpg"
        />
      </Link>

      <div className="login__container">
        <h1> Sign In</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChane={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChane={(e) => setPassword(e.target.value)}
          />

          <button className="login__signInButton">Sign in</button>
        </form>

        <p>
          By siging-in you are agreeing that I am a good programmer and this
          project tooke me 3 whole days !!!! (Faaiz Masood)
        </p>

        <button className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
