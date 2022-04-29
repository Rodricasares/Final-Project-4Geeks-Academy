import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import propTypes from "prop-types";

export const AddComment = (props) => {
  const { store, actions } = useContext(Context);
  const [data, setData] = useState({});

  useEffect(() => {
    setData({ ...data, site_id: props.site_id });
  }, []);

  const handleChange = (event) => {
    setData({ ...data, text: event.target.value });
  };

  const sendComment = () => {
    actions.addComment(data);
    console.log(data);
  };

  return (
    <div className="container">
      <div className=" col-12 my-3">
        <div className="card">
          <div className="card-body">
            <div className="mb-3">
              <label for="comment" className="form-label fw-bold">
                Whrite your comment
              </label>
              <textarea
                className="form-control"
                onChange={handleChange}
                id="comment"
                rows="3"
              ></textarea>
              <button onClick={sendComment} className="btn btn-danger mt-3 ">
                Add comment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AddComment.propTypes = {
  site_id: propTypes.number,
};
