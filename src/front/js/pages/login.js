import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { Navbar } from "../component/navbar";
import "../../styles/login.css";
export const Login = () => {
  const { store, actions } = useContext(Context);
  const [user, setUser] = useState({});
  let history = useHistory();
  return (
    <div className="row ">
      <div className="containe login">
        <Navbar />
        <div className="row  justify-content-center">
          <div className="col-md-6 col-sm-4">
            <h3 className="text-center text-white p-3">Login</h3>
            <div className="container-sm bg-light rounded opacity-75 p-5">
              <div className="form-floating mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="floatingInputInvalid"
                  placeholder="name@example.com"
                  onChange={(event) => {
                    setUser({ ...user, email: event.target.value });
                  }}
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  onChange={(event) => {
                    setUser({ ...user, password: event.target.value });
                  }}
                />{" "}
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  fetch(process.env.BACKEND_URL + "/api/login", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(user),
                  })
                    .then((data) => data.json())
                    .then((data) => {
                      if (data.token) {
                        localStorage.setItem("token", data.token);
                        localStorage.setItem("name", data.name);
                        localStorage.setItem("avatar", data.avatar);
                        history.push("/");
                      } else {
                        alert("Complete los campos obligatorios");
                      }
                    });
                }}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
