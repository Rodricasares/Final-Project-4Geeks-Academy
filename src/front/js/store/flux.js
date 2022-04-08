const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      list_sites: [],
      list_comments: [],
      roles: [],
    },
    actions: {
      // Use getActions to call a function within a fuction

      getListSites: (site) => {
        console.log(site);
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
      getMessage: () => {
        fetch(process.env.BACKEND_URL + "/api/hello")
          .then((resp) => resp.json())
          .then((data) => setStore({ message: data.message }))
          .catch((error) =>
            console.log("Error loading message from backend", error)
          );
      },

      getListComments: (id_site) => {
        console.log(id_site);
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
