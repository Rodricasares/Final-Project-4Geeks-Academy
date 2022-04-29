import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { Navbar } from "../component/navbar";
import { AddSite } from "../component/addSite";
import "../../styles/protected.css";
import { Card } from "../component/card.js";

export const Protected = () => {
  const { store, actions } = useContext(Context);
  const [checkValidate, setCheckValidate] = useState(false);
  let history = useHistory();

  useEffect(() => {
    actions.getUserSites();
    validate();
  }, []);

  const validate = async () => {
    if (!(await actions.validate())) {
      history.push("/");
    } else {
      setCheckValidate(true);
    }
  };

  return (
    <div className="fondo_protected">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Amatic+SC&family=Anton&family=Pacifico&family=Permanent+Marker&family=Poiret+One&family=Quicksand:wght@300&family=Staatliches&display=swap"
        rel="stylesheet"
      />
      <Navbar />
      <div className=" container-fluid mb-5   ">
        <div className="d-flex justify-content-between border-bottom  border-danger">
          <h1 className="text-danger px-5 ">My travels video 360</h1>
          <Link to="/addSite">
            <button className="btn btn-outline-danger me-3 fw-bold">
              Add Site
            </button>
          </Link>
        </div>
      </div>
      <div className=" container">
        <div className="row">
          {store.userSites.map((item, index) => {
            return (
              <Card
                key={index}
                title={item.place_name}
                img={item.url_img}
                id={item.id}
              />
            );
          })}
        </div>
      </div>

      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-6 col-sm-4">
            <>{checkValidate ? "" : null}</>
          </div>
        </div>
      </div>
    </div>
  );
};
