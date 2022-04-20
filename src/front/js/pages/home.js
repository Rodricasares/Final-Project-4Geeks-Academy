import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Navbar } from "../component/navbar";
import { CardList } from "../component/cardList";
import { SearchSite } from "../component/search-site";
import titulo from "../../img/titulo.jpg";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid px-0">
      {/* Header */}
      <div className="row">
        <div className="header">
          <Navbar />
        </div>
      </div>
      <SearchSite />

      {/* Resume */}
      {/* <div className=" resume   container-fluid">
        <div className="row">
          <h1 className="h1 px-5 mt-4">Comparte tus viajes con la comunidad</h1>
        </div>
        <div className="row ">
          <div className="col-12  col-sm-6 p-5">
            <img
              src="https://www.giuseppegalliano.es/wp-content/uploads/2018/11/video_360_VR_panormaici_.jpg"
              className="img-fluid border border-2 border-dark rounded-2"
              alt="imagen"
            />
          </div>
          <div className=" col-12 col-sm-6 mt-5">
            <h2 className="text-center   ">
              ¡¡Vive la experiencia de visitar los lugares mas increibles del
              mundo sin necesidad de coger un avion!!
            </h2>
            <h2 className="text-center  mt-3 p-5">Gracias a la realid</h2>
          </div>
        </div> 
      </div>*/}
      <CardList />
      <div></div>
    </div>
  );
};
