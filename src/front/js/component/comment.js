import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

export const Comment = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <div className=" col-md-12 col-lg-6 my-3">
      <div className="card">
        <div className="card-header fw-bold">{props.user}</div>
        <div className="card-body">
          <p className="p">{props.text}</p>
        </div>
      </div>
    </div>
  );
};

Comment.propTypes = {
  text: propTypes.string,
  user: propTypes.number,
};
