import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "./card.js";

export const CardList = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className=" container-fluid mb-5   ">
      <h1 className="text-danger px-5"></h1>
      <div className=" container">
        <div className="row">
          {store.list_sites.map((item, index) => {
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
  );
};
