import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css";
import axios from "axios";

const Login = () => {
  const [loginInput, setLoginInput] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginInput({ ...loginInput, [e.target.name]: e.target.value });
  };
    const handleSubmit = async () => {
      try {
        const data = await axios.post('/api/auth/login', {loginInput})
      } catch (error) {
        
      }
  };
  return (
    <section>
      <Navbar />
      <section className="login__body">
        <div className="card">
          <div className="d-flex flex-column card-body">
            <h1 className="text-center">Login</h1>
            <form className="d-grid gap-3" method="POST" action="">
              <input
                name="username"
                type="username"
                placeholder="username"
                className="form-control"
                onChange={handleChange}
                value={loginInput.username}
              />
              <input
                name="password"
                type="password"
                placeholder="password"
                className="form-control"
                onChange={handleChange}
                value={loginInput.password}
                autoComplete="on"
              />
              {/* {isLoginError && (
                <span className="text-danger">wrong email or password</span>
              )} */}
              <button
                onClick={handleSubmit}
                type="button"
                className="btn btn-primary"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Login;
