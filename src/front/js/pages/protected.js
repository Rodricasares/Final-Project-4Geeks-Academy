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
      <Navbar />
      <div className=" container-fluid mb-5   ">
        <h1 className="text-danger px-5">Mis Lugares</h1>
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
        <Link to="/addSite">
          <button className="btn btn-danger">añadir nuevo sitio</button>
        </Link>
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
