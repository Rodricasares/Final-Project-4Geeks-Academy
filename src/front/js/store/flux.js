const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],

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

      getMessage: () => {
        // fetching data from the backend
        fetch(process.env.BACKEND_URL + "/api/hello")
          .then((resp) => resp.json())
          .then((data) => setStore({ message: data.message }))
          .catch((error) =>
            console.log("Error loading message from backend", error)
          );
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
