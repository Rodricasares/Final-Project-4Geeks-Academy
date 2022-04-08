const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      
      list_sites: [],
      list_comments: [],
    },
    actions: {
      // Use getActions to call a function within a fuction

      getListSites: (site) => {
        console.log(site);
        fetch(
          "https://3001-josemt90-finalproject4ge-xt024ju93r8.ws-eu38.gitpod.io/api/sites",
          {
            method: "POST",
            body: JSON.stringify({ site: site }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then((res) => res.json())
          .then((data) => setStore({ list_sites: data }))
          .catch((error) =>
            console.log("Error loading message from backend", error)
          );
      },

      getListComments: (id_site) => {
        console.log(id_site);
        fetch(
          "https://3001-josemt90-finalproject4ge-xt024ju93r8.ws-eu38.gitpod.io/api/comments",
          {
            method: "POST",
            body: JSON.stringify({ id_site: id_site }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then((res) => res.json())
          .then((data) => setStore({ list_comments: data }))
          .catch((error) =>
            console.log("Error loading message from backend", error)
          );
      },

      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },


      roles: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
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
