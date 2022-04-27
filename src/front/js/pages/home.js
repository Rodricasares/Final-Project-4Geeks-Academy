import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Navbar } from "../component/navbar";
import { CardList } from "../component/cardList";
import { SearchSite } from "../component/search-site";
import titulo from "../../img/titulo.jpg";
import { Card } from "../component/card.js";

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getAllSites();
  }, []);

  return (
    <div className="container-fluid px-0">
      {/* Header */}
      <div className="row">
        <div className="header">
          <Navbar />
          <h1 className="titulo text-center">
            Travel<span className="text-danger">360</span>
          </h1>
        </div>
      </div>
      <SearchSite />

      {/* Resume */}
      <div className="resume container-fluid">
        <div className="row">
          <CardList />
        </div>
        <div className="row ">
          <div className="col-12  col-sm-6 ">
            <div
              id="carouselExampleCaptions"
              className="carousel slide shadow p-3 mb-5 bg-body rounded"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="https://educacion30.b-cdn.net/wp-content/uploads/2016/11/realidad-virtual-microsoft-978x600.jpg"
                    className="d-block w-100"
                    alt="..."
                    height="500px"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>El mundo en un solo click</h5>
                    <p>
                      Visita cualquier lugar del mundo y vive una experiencia
                      única.{" "}
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src="https://mediterrani.com/wp-content/uploads/2021/03/turismo-virtual-realidad.jpg"
                    className="d-block w-100"
                    alt="..."
                    height="500px"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Sumergete en lo mas profundo !!!</h5>
                    <p>
                      Con tus gafas, smartphone o laptop podras acceder y
                      visitar lugares enblematicos.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src="https://ep01.epimg.net/elpais/imagenes/2020/03/18/paco_nadal/1584558593_892321_1584558763_noticia_normal.jpg"
                    className="d-block w-100"
                    alt="..."
                    height="500px"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Tu album virtual 360º</h5>
                    <p>
                      Podras cargar tus propias experiencias y disfrutar la de
                      otros usuarios.
                    </p>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className=" col-12 col-sm-6 ">
            <div class="col shadow p-3 mb-5 bg-body rounded">
              <div class="card ">
                <iframe
                  width="auto"
                  height="310"
                  src="https://www.youtube.com/embed/-UH3irenwjA"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <div class="card-body ">
                  <h4 class="card-title">Viaja alrededor del Mundo</h4>
                  <p class="card-text ">
                    ¡¡Vive la experiencia de visitar los lugares mas increibles
                    del mundo sin necesidad de coger un avion!!
                  </p>
                  <h5>
                    Graba tu experiencia y compartela con{" "}
                    <span class="badge bg-danger">nosotr@s!!!</span>
                  </h5>

                  <h3 className="text-center">
                    Gracias a la realid Virtual !!!
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" container-fluid mb-5   ">
        <h1 className="text-danger px-5"></h1>
        <div className=" container">
          <div className="row">
            {store.allSites.map((item, index) => {
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
      </div>
    </div>
  );
};
