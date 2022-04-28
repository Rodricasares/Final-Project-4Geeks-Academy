import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/register.css";
import { Navbar } from "../component/navbar";
import { Link } from "react-router-dom";

export const Register = () => {
  const { store, actions } = useContext(Context);
  const [data, setData] = useState({});
  const [message, setMessage] = useState({});
  const [files, setFiles] = useState(null);

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("This are the files", files);
    let body = new FormData();
    console.log(process.env.BACKEND_URL + "/api/user");
    body.append("profile_image", files[0]);
    for (var key in data) {
      body.append(key, data[key]);
    }
    const options = {
      body,
      method: "POST",
    };
    fetch(process.env.BACKEND_URL + "/api/user", options)
      .then((resp) => resp.json())
      .then((resp) => setMessage(resp))
      .catch((errors) => console.error("Errorrr", error));
  };

  return (
    <div className="container-fluid register ">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Amatic+SC&family=Anton&family=Pacifico&family=Permanent+Marker&family=Poiret+One&family=Quicksand:wght@300&family=Staatliches&display=swap"
        rel="stylesheet"
      />
      <Navbar />
      <div className="row justify-content-center">
        <div className="col-md-6 col-sm-4">
          <h3 className="text-center text-white p-3">Registro de usuarios</h3>

          <form>
            <div className="container-sm bg-light rounded opacity-75 p-5">
              <label htmlFor="basic-url" className="form-label"></label>

              <div className="input-group flex-nowrap mb-3">
                <input
                  type="file"
                  className="form-control"
                  id="inputGroupFile04"
                  aria-describedby="inputGroupFileAddon04"
                  aria-label="Upload"
                  onChange={(e) => setFiles(e.target.files)}
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
                  placeholder="Name"
                  aria-label="Name"
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
                  placeholder="Last Name"
                  aria-label="Last Name"
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
                className="btn btn-outline-danger"
                onClick={handleSubmit}
              >
                New User
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
