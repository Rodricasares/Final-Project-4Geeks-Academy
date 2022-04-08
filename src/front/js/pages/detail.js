import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { Navbar } from "../component/navbar";
import { CommentList } from "../component/commentsList";

export const Detail = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    actions.getListComments(params.id);
  }, []);

  return (
    <div className="container-fluid">
      <Navbar />
      <div className="row">
        {store.list_sites.map((item, index) => {
          return params.id == item.id ? (
            <div key={index}>
              <h1 className=" h1 m-3">{item.place_name}</h1>
              <div className="text-center">
                <iframe
                  className="rounded-2 border border-2 border-dark"
                  width="1200"
                  height="700"
                  src={item.url_site}
                  title="YouTube video player"
                  frameborder="2"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <p className="p m-3 text-start">{item.description}</p>
              </div>
              <CommentList />
            </div>
          ) : (
            ""
          );
        })}
      </div>
    </div>
  );
};
