import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../src/login.css"
import Axios from "axios";

function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    const wrapper = document.querySelector(".wrapper");
    const registerLink = document.querySelector(".register-link");
    const loginLink = document.querySelector(".login-link");

    if (wrapper && registerLink && loginLink) {
      setTimeout(() => {}, 1000);

      registerLink.onclick = () => {
        wrapper.classList.add("active");
      };

      function login() {
        wrapper.classList.remove("active");
      }

      loginLink.onclick = () => {
        login();
      };

      return () => {
        registerLink.onclick = null;
        loginLink.onclick = null;
      };
    }
  }, []);

  const url = "https://apitest.reachstar.io/signin";
  const url2 = "https://apitest.reachstar.io/signup";

  const [data1, setData1] = useState({
    name: "",
    email: "",
    password: "",
  });

  function submit1(e) {
    e.preventDefault();
    Axios.post(url2, {
      name: data1.name,
      email: data1.email,
      password: data1.password,
    })
      .then((res) => {
        setData1({
          name: "",
          email: "",
          password: "",
        });
      })
    localStorage.setItem("registrationData", JSON.stringify(data1));
  }

  const [Data, setData] = useState({
    email: "",
    password: "",
  });

  function submit(e) {
    e.preventDefault();
    Axios.post(url, {
      name: "",
      email: Data.email,
      password: Data.password,
    }).then((res) => {
      setData({
        email: "",
        password: "",
      });
      navigate("/home");
    });
  }

  return (
    <div className="container justify-content-center d-flex align-items-center ">
      <div className="wrapper">
      <span className="bg-animate"></span>
      <span className="bg-animate2"></span>
      <div className="form-box login">
        <h2 className="animation">Login</h2>
        <form action="#" onSubmit={(e) => submit(e)}>
          <div className="input-box animation">
            <input
              type="email"
              required
              value={Data.email}
              onChange={(e) => setData({ ...Data, email: e.target.value })}
            />
            <label>Email</label>
            <i className="bx bxs-user"></i>
          </div>
          <div className="input-box animation">
            <input
              type="password"
              required
              value={Data.password}
              onChange={(e) => setData({ ...Data, password: e.target.value })}
            />
            <label>Password</label>
            <i className="bx bxs-lock-alt"></i>
          </div>
          <button type="submit" className="btn animation">
            Login
          </button>
          <div className="logreg-link animation">
            <p>
              Don't have an account?{" "}
              <a href="#" className="register-link">
                Sign Up
              </a>
            </p>
          </div>
        </form>
      </div>
      <div className="info-text login">
        <h2 className="animation">Welcome Back!</h2>
        <p className="animation">It's great to see you again</p>
      </div>

      <div className="form-box register">
        <h2 className="animation">Sign Up</h2>
        <form action="#" onSubmit={(e) => submit1(e)}>
          <div className="input-box animation">
            <input
              type="text"
              required
              value={data1.name}
              onChange={(e) => setData1({ ...data1, name: e.target.value })}
            />
            <label>Username</label>
            <i className="bx bxs-user"></i>
          </div>
          <div className="input-box animation">
            <input
              type="email"
              required
              value={data1.email}
              onChange={(e) => setData1({ ...data1, email: e.target.value })}
            />
            <label>Email</label>
            <i className="bx bxs-envelope"></i>
          </div>
          <div className="input-box animation">
            <input
              type="password"
              required
              value={data1.password}
              onChange={(e) => setData1({ ...data1, password: e.target.value })}
            />
            <label>Password</label>
            <i className="bx bxs-lock-alt"></i>
          </div>
          <button type="submit" className="btn animation">
            Sign Up
          </button>
          <div className="logreg-link animation">
            <p>
              Already have an account?{" "}
              <a href="#" className="login-link">
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
      <div className="info-text register">
        <h2 className="animation">Welcome Back!</h2>
        <p className="animation">It's great to see you again</p>
      </div>
    </div>
    </div>
  );
}

export default Login;
