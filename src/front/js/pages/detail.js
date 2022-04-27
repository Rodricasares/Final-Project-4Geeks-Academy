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
  var pressed = false;

  useEffect(() => {
    actions.getListComments(params.id);
    actions.getListRecommends(params.id);
  }, []);

  const addRecommend = () => {
    actions.addRecommends(params.id);
  };

  console.log(pressed);

  return (
    <div className="row detail">
      <div className="container-fluid ">
        <Navbar />
        <div className="row ">
          {store.list_sites.map((item, index) => {
            return params.id == item.id ? (
              <div key={index}>
                <h1 className=" text-center h1 m-3">{item.place_name}</h1>
                <div className=" iframe container text-center pb-4 px-0 rounded-3">
                  <iframe
                    className="rounded-2 border border-2 border-dark"
                    width="100%"
                    height="700"
                    src={item.url_site}
                    title="YouTube video player"
                    frameBorder="2"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <p className="p m-3 fw-bold text-start">{item.description}</p>
                  <div className=" d-flex justify-content-between">
                    <button
                      className=" btn btn-danger ms-4  rounded-pill"
                      onClick={addRecommend}
                    >
                      <i className="far fa-heart" />{" "}
                      {store.list_recommends ? store.list_recommends.length : 0}{" "}
                    </button>
                  </div>
                </div>

                <CommentList />
                <AddComment site_id={params.id} />
              </div>
            ) : (
              ""
            );
          })}
        </div>
      </div>
    </div>
  );
};
