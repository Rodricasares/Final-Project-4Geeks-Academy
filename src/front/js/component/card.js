import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

import "../../styles/card.css";

export const Card = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <div className=" col-md-6 col-lg-3">
      <Link to={`/detail/${props.id}`}>
        <div className="  card m-2 border-0   ">
          <img
            src={props.img}
            className=" card-img-top "
            alt="Image not found"
            width="400"
            height="400"
            style={{ borderRadius: "30px" }}
          />
          <div className="overlay">
            <div className="text-overlay">Ver video</div>
          </div>

          {/* <div className="card-body position-absolute bottom-0 start-50 translate-middle-x  d-flex    "> */}
          <h5 className="card-title position-absolute bottom-0 start-0 text-light  bg-danger p-1 rounded-pill m-3 p-2 ">
            {props.title}
          </h5>

          <button className=" btn btn-danger position-absolute bottom-0 end-0 m-3 rounded-pill">
            <i className="far fa-heart" />
          </button>
        </div>
      </Link>
    </div>
  );
};

Card.propTypes = {
  id: propTypes.number,
  title: propTypes.string,
  img: propTypes.string,
};
