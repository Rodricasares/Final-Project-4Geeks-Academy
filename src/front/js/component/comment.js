import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

export const Comment = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <div className=" col-md-6 col-lg-3">
      <div class="card">
        <div class="card-body">
          <p className="p">{props.text}</p>
          <p className="p">{props.user}</p>
        </div>
      </div>
    </div>
  );
};

Comment.propTypes = {
  text: propTypes.string,
  user: propTypes.number,
};
