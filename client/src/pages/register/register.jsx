import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import axios from 'axios';

const Register = () => {
    const [registerInput, setRegisterInput] = useState({
        username: "",
        password: "",
      });
    
      const handleChange = (e) => {
        setRegisterInput({ ...registerInput, [e.target.name]: e.target.value });
    };
    axios.defaults.baseURL = "http://localhost:5000/"
    const handleSubmit = async () => {
        try {
            const data = await axios.post('api/auth/register', registerInput)
           await console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <section>
        <Navbar />
        <section className="login__body">
          <div className="card">
            <div className="d-flex flex-column card-body">
              <h1 className="text-center">Register</h1>
              <form className="d-grid gap-3" method='POST' action=''>
                <input
                  name="username"
                  type="username"
                  placeholder="username"
                  className="form-control"
                  onChange={handleChange}
                  value={registerInput.username}
                />
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="form-control"
                  onChange={handleChange}
                  value={registerInput.password}
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
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </section>
      </section>
    );
};

export default Register;