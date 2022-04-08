import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Navbar } from "../component/navbar";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <Navbar />
      <h1>Rodrigo</h1>
    </div>
  );
};
