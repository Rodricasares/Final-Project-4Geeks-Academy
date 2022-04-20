const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      list_sites: [],
      list_comments: [],
      list_recommends: [],
      roles: [],
    },
    actions: {
      // Use getActions to call a function within a fuction

      //envia a la ruta lo que se escribe en el formulario search-site
      getListSites: (site) => {
        fetch(process.env.BACKEND_URL + "/api/sites", {
          method: "POST",
          body: JSON.stringify({ site: site }),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => setStore({ list_sites: data }))
          .catch((error) =>
            console.log("Error loading message from backend", error)
          );
      },

      //devuelve mensajes
      getMessage: () => {
        fetch(process.env.BACKEND_URL + "/api/hello")
          .then((resp) => resp.json())
          .then((data) => setStore({ message: data.message }))
          .catch((error) =>
            console.log("Error loading message from backend", error)
          );
      },

      //envia a la ruta la id del sitio para que muestre todos los comentarios de dicha ruta
      getListComments: (id_site) => {
        fetch(process.env.BACKEND_URL + "/api/comments", {
          method: "POST",
          body: JSON.stringify({ id_site: id_site }),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => setStore({ list_comments: data }))
          .catch((error) =>
            console.log("Error loading message from backend", error)
          );
      },

      //envia a la ruta la id del sitio para que muestre todas las recomendaciones de dicha ruta
      getListRecommends: (id_site) => {
        fetch(process.env.BACKEND_URL + "/api/recommends", {
          method: "POST",
          body: JSON.stringify({ id_site: id_site }),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => setStore({ list_recommends: data }))
          .catch((error) =>
            console.log("Error loading message from backend", error)
          );
      },

      // envia la id del sitio a la ruta para que añada una recomendacion a la base de datos
      addRecommends: (id_site) => {
        fetch(process.env.BACKEND_URL + "/api/addRecommends", {
          method: "POST",
          body: JSON.stringify({ id_site: id_site }),
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
      },

      // Añade un comentario a la base de datos
      addComment: (dataComment) => {
        fetch(process.env.BACKEND_URL + "/api/addComment", {
          method: "POST",
          body: JSON.stringify(dataComment),
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
      },

      //Valida el token
      validate: async () => {
        const response = await fetch(
          process.env.BACKEND_URL + "/api/validate",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        const data = await response.json();
        return data.validate;
      },
    },
  };
};

export default getState;
