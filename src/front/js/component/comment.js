import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

export const Comment = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <div className=" col-md-12 col-lg-6 my-3">
      <div className="card">
        <div className="card-header  bg-danger d-flex justify-content-between fw-bold">
          {props.user}

          <img
            src={props.avatar}
            alt="Bootstrap"
            width="30"
            height="30"
            className="rounded-circle "
          />
        </div>
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
  avatar: propTypes.string,
};
