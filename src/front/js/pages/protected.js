import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { Navbar } from "../component/navbar";
import { AddSite } from "../component/addSite";
import "../../styles/protected.css";
export const Protected = () => {
  const { store, actions } = useContext(Context);
  const [checkValidate, setCheckValidate] = useState(false);
  let history = useHistory();
  useEffect(() => {
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
    <div className="row protected">
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-md-6 col-sm-4">
            <Navbar />
            <>{checkValidate ? "" : null}</>
            <AddSite />
          </div>
        </div>
      </div>
    </div>
  );
};
