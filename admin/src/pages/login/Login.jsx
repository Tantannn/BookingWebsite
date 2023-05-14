import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./login.scss";
import axios from "axios";
import {  useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import {login} from '../../redux/login'

const Login = () => {
  const [loginError, setLoginError] = useState(false)
  const [loginInput, setLoginInput] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleChange = (e) => {
    setLoginInput({ ...loginInput, [e.target.name]: e.target.value });
  };
  axios.defaults.baseURL = "http://localhost:5000/api";
  const handleSubmit = async () => {
    try {
      const res = await axios.post("/auth/login", loginInput, { withCredentials: true });
      if (res.data.isAdmin) {
        dispatch(login({userId: res.data._id,user: res.data.username}))
        navigate('/')
      } else alert('you are not admin')
    } catch (error) {
      setLoginError(true)
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
              {loginError && (
                <span className="text-danger">wrong email or password or you're not admin</span>
              )}
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
