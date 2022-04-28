import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { Navbar } from "../component/navbar";
import { CommentList } from "../component/commentsList";
import { AddComment } from "../component/addComment";

import "../../styles/detail.css";

export const Detail = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [site, setSite] = useState({});
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch(process.env.BACKEND_URL + "/api/detailSite", {
      method: "POST",
      body: JSON.stringify({ id_site: params.id }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setSite(data))
      .catch((error) =>
        console.log("Error loading message from backend", error)
      );

    actions.getListComments(params.id);
    actions.getListRecommends(params.id);
  }, [count]);

  const addRecommend = () => {
    actions.addRecommends(params.id);
    setCount(count + 1);
  };

  return (
    <div className="container-fluid p-0 detail ">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Amatic+SC&family=Anton&family=Pacifico&family=Permanent+Marker&family=Poiret+One&family=Quicksand:wght@300&family=Staatliches&display=swap"
        rel="stylesheet"
      />
      <Navbar />

      <h1 className=" h1 text-center m-3 text-danger">
        {site.place_name} - {site.city}
      </h1>
      <div className=" iframe container text-center pb-4 px-0 rounded-3">
        <iframe
          className="rounded-2 border border-2 border-dark "
          width="100%"
          height="700"
          src={site.url_site}
          title="YouTube video player"
          frameBorder="2"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <p className="p m-3 fw-bold text-start">{site.description}</p>

        <div className=" d-flex justify-content-between">
          <button
            className=" btn btn-danger ms-4  rounded-pill"
            onClick={addRecommend}
          >
            <i className="far fa-heart" />{" "}
            {store.list_recommends ? store.list_recommends.length : 0}{" "}
          </button>
          {/* <p className="me-3">
            <strong>Creado por: </strong>
            {site.user_name}{" "}
            <img
              src={site.avatar}
              alt="Bootstrap"
              width="30"
              height="30"
              className="rounded-circle border border-dark "
            />
          </p> */}
        </div>
      </div>

      <CommentList />
      <AddComment site_id={params.id} />
    </div>
  );
};
