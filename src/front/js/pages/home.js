import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Navbar } from "../component/navbar";
import { CardList } from "../component/cardList";
import { SearchSite } from "../component/search-site";
import titulo from "../../img/titulo.jpg";
import { Card } from "../component/card.js";

export const Home = () => {
  const { store, actions } = useContext(Context);
  /*
  useEffect(() => {
    actions.getListSites();
  }, []);
*/
  return (
    <div className="container-fluid px-0">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Amatic+SC&family=Anton&family=Pacifico&family=Permanent+Marker&family=Poiret+One&family=Quicksand:wght@300&family=Staatliches&display=swap"
        rel="stylesheet"
      />

      {/* Header */}
      <div className="row">
        <div className="header">
          <Navbar />

          <h5 className="titulo text-center">
            {" "}
            <div className="d-flex justify-content-center opacity-75">
              <h1 className="row text-secondary mx-4 border-bottom">
                Barcelona
              </h1>

              <h1 className="row text-secondary mx-4 border-bottom">
                Nueva York
              </h1>

              <h1 className="row text-secondary mx-4 border-bottom">Roma</h1>
            </div>
            <div className="d-flex justify-content-center opacity-75">
              <h3 className="row text-dark mx-4">Sagrada Familia</h3>
              <h3 className="row text-light mx-4">La séptima avenida</h3>
              <h3 className="row text-dark mx-3">El coliseo</h3>
              <h3 className="row text-light mx-3">La Alhambra</h3>
            </div>
            Travel<span className="text-danger">360</span>
          </h5>
        </div>
      </div>
      <SearchSite />

      {/* Resume */}
      <div className="resume container-fluid">
        <div className="row">
          <CardList />
        </div>

        <div className="row ">
          <div className="col-12  col-sm-6 p-4">
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
                    <p className="fw-bold">
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
          <div className=" col-12 col-sm-6 mt-5">
            <div class="card  border-0">
              <div class="card-body ">
                <h4 class="card-title about">About Us</h4>
                <p class="card-text textAbout">
                  Where does it come from? Contrary to popular belief, Lorem
                  Ipsum is not simply random text. It has roots in a piece of
                  classical Latin literature from 45 BC, making it over 2000
                  years old. Richard McClintock, a Latin professor at
                  Hampden-Sydney College in Virginia, looked up one of the more
                  obscure Latin words, consectetur, from a Lorem Ipsum passage,
                  and going through the cites of the word in classical
                  literature, discovered the undoubtable source. Lorem Ipsum
                  comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum
                  et Malorum" (The Extremes of Good and Evil) by Cicero, written
                  in 45 BC. This book is a treatise on the theory of ethics,
                  very popular during the Renaissance. The first line of Lorem
                  Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
                  section 1.10.32. The standard chunk of Lorem Ipsum used since
                  the 1500s is reproduced below for those interested. Sections
                  1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
                  Cicero are also reproduced in their exact original form,
                  accompanied by English versions from the 1914 translation by
                  H. Rackham.
                </p>
                <h3 className="text-center"></h3>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center border-bottom"></div>

        {/* parte 2************************************************************************/}

        <div className="row ">
          <div className="col-12  col-sm-6 py-5">
            <div class="row g-0 shadow p-3 mb-2 bg-body rounded">
              <div className="col-sm-6 col-md-8 p-3  infoCard">
                <h5>What is Lorem Ipsum?</h5>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
              <div className="col-6 col-md-4">
                <img
                  src="https://viajes.nationalgeographic.com.es/medio/2019/06/06/macu_5da3ead6_1200x630.jpg"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
            <div class="row g-0 shadow p-3 mb-2 bg-body rounded">
              <div className="col-sm-6 col-md-8 p-3 infoCard">
                <h5>What is Lorem Ipsum?</h5>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
              <div className="col-6 col-md-4">
                <img
                  src="https://viajes.nationalgeographic.com.es/medio/2019/06/06/macu_5da3ead6_1200x630.jpg"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          </div>
          <div className=" col-12 col-sm-6 mt-5">
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
                  <h4 class="card-title pb-2">Viaja alrededor del Mundo</h4>
                  <p class="card-text ">
                    ¡¡Vive la experiencia de visitar los lugares mas increibles
                    del mundo sin necesidad de coger un avion!!
                  </p>
                  <h5>
                    Graba tu experiencia y compartela con{" "}
                    <span class="badge bg-danger ">nosotr@s!!!</span>
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
