import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/register.css";
import { Navbar } from "../component/navbar";
import { Link } from "react-router-dom";

export const Register = () => {
  const { store, actions } = useContext(Context);
  const [data, setData] = useState({});
  const [message, setMessage] = useState({});

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  const handleSubmit = () => {
    console.log(JSON.stringify(data));
    fetch(process.env.BACKEND_URL + "/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((resp) => resp.json())
      .then((resp) => {
        setMessage(resp);
      });
  };

  return (
    <div className="container">
      <Navbar />
      <div className="row justify-content-center">
        <div className="col-md-8 col-sm-10">
          <h3 className="text-center text-white p-3">Registro de usuarios</h3>

          <form>
            <div className="container-sm bg-light rounded opacity-75 p-5">
              <label htmlFor="basic-url" className="form-label">
                Your vanity URL
              </label>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-image"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                    <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
                  </svg>
                </span>
                <input
                  name="img"
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  id="basic-url"
                  aria-describedby="basic-addon3"
                />
              </div>

              <div className="input-group flex-nowrap mb-3">
                <span className="input-group-text" id="addon-wrapping">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-person"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                  </svg>
                </span>
                <input
                  name="name"
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  placeholder="Nombre"
                  aria-label="Nombre"
                  aria-describedby="addon-wrapping"
                />
              </div>

              <div className="input-group flex-nowrap mb-3">
                <span className="input-group-text" id="addon-wrapping">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-person-plus"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                    <path
                      fillRule="evenodd"
                      d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
                    />
                  </svg>
                </span>
                <input
                  name="last_name"
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  placeholder="Primer apellido"
                  aria-label="Primer apellido"
                  aria-describedby="addon-wrapping"
                />
              </div>

              <div className="form-floating mb-3">
                <input
                  name="email"
                  onChange={handleChange}
                  type="email"
                  className="form-control"
                  id="floatingInputInvalid"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  name="password"
                  onChange={handleChange}
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>

              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Crear usuario
              </button>
              <div className="row pt-3">
                {message.message ? (
                  <div className={`alert ${message.color}`} role="alert">
                    {message.message}{" "}
                    {message.ok ? <Link to="/login">Go to login</Link> : ""}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
