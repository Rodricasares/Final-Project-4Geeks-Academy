import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/searchSite.css";

export const SearchSite = (props) => {
  const { store, actions } = useContext(Context);
  const [data, setData] = useState({});

  const handleChange = (event) => {
    setData(event.target.value);
  };

  const handleSubmit = () => {
    actions.getListSites(data);
  };

  return (
    <div className="container searchSite p-2 rounded-3 bg-danger   ">
      <div className="d-flex ">
        <input
          type="text"
          name="site"
          className="form-control form-control-lg mx-1"
          id="formId"
          onChange={handleChange}
          placeholder="Introduce un lugar..."
        />
        <button
          type="button"
          onClick={handleSubmit}
          className="btn btn-light text-secondary fw-bold "
        >
          Explorar
        </button>
      </div>
    </div>
  );
};
